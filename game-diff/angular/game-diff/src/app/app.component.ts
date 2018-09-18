import { Component } from '@angular/core';
import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';
import { invalid } from '@angular/compiler/src/render3/view/util';

declare let ipcRenderer: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  value: string = '1';
  title = 'game-diff';

  cells: number[][];

  fakeCells: [number, number][];

  fakeColors: number[];

  dialogMsg: String;

  colors = ['red', 'blue', 'white', 'black', 'yellow', 'purple', 'pink', 'green', 'orange']

  found = 0;

  startTime: number;

  dialogVisable = false;

  // 改成二维数组的访问可能会快一些
  private colorStyleClass(i, j) {
    let color = this.colors[this.cells[i][j]];
    this.fakeCells.forEach((v, index) => {
      if (v[0] == i && v[1] == j) {
        color = this.colors[this.fakeColors[index]];
      }
    })
    return color;
  }

  private invalid(i: number, j: number) {
    this.fakeCells.forEach((v, index) => {
      if (v[0] == i && v[1] == j) {
        if (this.fakeColors[index] != this.cells[i][j]) {
          this.found++;
          this.fakeColors[index] = this.cells[i][j];
        }
      }
    })
    if (this.found == 5) {
      let endTime = new Date().getTime();
      this.showDialogWithMsg('All fake cells found in \n' + ((endTime - this.startTime) / 1000).toString() + 's!!!');
    }
  }

  private start() {
    this.found = 0;
    let size = Number(this.value) * 20;
    ipcRenderer.send('window-size-change', size);
    this.cells = new Array(size);
    let i = 0;
    while (i < size) {
      let j = 0;
      let ct = new Array(size);
      while (j < size) {
        ct[j] = (Math.floor((Math.random() * 9)));
        j++;
      }
      this.cells[i] = ct;
      i++;
    }
    this.fakeColors = new Array(5);
    this.fakeCells = new Array(5);
    for (let l in [0, 1, 2, 3, 4]) {
      let x = Math.floor(Math.random() * size);
      let y = Math.floor(Math.random() * size);
      let c = 0;
      do {
        c = Math.floor(Math.random() * 9);
      } while (this.cells[x][y] == c)
      this.fakeCells[l] = [x, y];
      this.fakeColors[l] = c;
    }
    this.startTime = new Date().getTime();
  }


  private showDialogWithMsg(msg: String) {
    this.dialogMsg = msg;
    this.dialogVisable = true;

  }

  private closeDialog() {
    this.dialogVisable = false;
  }

}
