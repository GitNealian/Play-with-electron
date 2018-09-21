import { Injectable, Testability } from '@angular/core';
import { Cell } from '../typeboard/cell';

@Injectable({
  providedIn: 'root'
})
export class TypenService {

  text: String;

  textArray: Cell[][];

  inputHistory: String[];

  inputText: String;
  curRowIndex = 0;
  curColIndex = 0;

  stIng = false;
  stPaused = true;

  rsSpeed = 0;
  rsTime = 0;
  rsHits = 0;
  rsLen = 0;
  rsBack = 0;
  rsAccuracy = 0;
  totalKeyHit = 0;
  backSpaceKeyHit = 0;
  totalCharacter = 0;

  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
  onRestart: () => void;

  // text为当前行输入的字符串
  onType(text: String) {
    this.totalCharacter = this.curRowIndex * 12 + text.length;
    this.inputText = text;
    let cells = this.curCells();
    // 删除时字符c的状态要撤消，为了不用判断哪些是删除的字符，
    // 而每行的字符也不多，索引将所有字符状态都撤消，之后再重新设置状态
    cells.forEach(c => {
      c.unMark();
    })
    // 对所有输入的字符设置状态
    text.split('').forEach((e, i) => {
      if (i < cells.length) {
        if (e == cells[i].character) {
          cells[i].markRight();
        } else {
          cells[i].markMistake();
        }
      }
    });

    if (text.length >= cells.length) {
      this.inputHistory.push(text.substring(0, cells.length)); // 将该行的输入保存
      this.nextLine(text);
    }
    this.curColIndex = this.inputText.length; // curColIndex始终为下一个要输入的字符在该行的索引
    console.log(this.curColIndex);
  };

  constructor() {
    this.curColIndex = 0;
    this.curRowIndex = 0;
    this.inputHistory = [];
    this.inputText = '';
    this.stIng = false;
    this.stPaused = true;
  }

  calculate() {
    this.rsTime += 0.5;
    this.rsSpeed = this.totalCharacter / this.rsTime;
    this.rsHits = this.totalKeyHit / this.rsTime;
    this.rsLen = this.totalKeyHit / this.totalCharacter;
  }

  start() {
    this.onStart();
    this.stPaused = false;
    let startTime = Date.parse(new Date().toDateString());
    setInterval(this.calculate(), 500); // 每500毫秒进行一次计算
  }

  setText(text: String) {
    this.text = text;
    this.textArray = this.toTextArray(this.text, 32);
    this.stIng = true;
  }

  nextLine(text: String) {
    // 有可能一个词语跨越2行，所以输入这个词时，该词的剩余部分要放到下一行的输入中
    this.inputText = text.substring(this.curCells().length);

    this.curRowIndex++;
  }

  curCells() {
    return this.textArray[this.curRowIndex];
  }

  curCharacter() {
    return this.textArray[this.curRowIndex][this.curColIndex].character;
  }

  // 将字符串每delta个分为一组
  toTextArray(text: String, delta: number): Cell[][] {

    // 处理特殊字符，换行、多余的空格等等

    let textArray: Cell[][] = [];

    // 相当于range(start=0, end=text.length, step=delta)
    Array.from(
      { length: (text.length) / delta + 1 }, (v, k) => (k * delta)
    ).forEach(e => {
      let temp: Cell[] = [];
      text.slice(e, e + delta).split('').forEach(c => {
        temp.push(new Cell(c));
      })
      console.log(temp.length);
      textArray.push(temp);
    })
    return textArray;
  }


}
