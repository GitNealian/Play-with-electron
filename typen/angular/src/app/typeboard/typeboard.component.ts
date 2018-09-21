import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { TypenService } from '../services/typen.service';
import { RefresherService } from '../services/refresher.service';
import { AssistentService } from '../services/assistent.service';

@Component({
  selector: 'app-typeboard',
  templateUrl: './typeboard.component.html',
  styleUrls: ['./typeboard.component.css']
})
export class TypeboardComponent implements OnInit {

  typenService: TypenService;
  refreshService: RefresherService;
  assistentService: AssistentService;

  constructor(typenService: TypenService, @Inject(ChangeDetectorRef) cd, refreshService: RefresherService, assistentService: AssistentService) {
    refreshService.add(cd);
    this.refreshService = refreshService;
    this.assistentService = assistentService;
    this.typenService = typenService;
    this.typenService.onStart = () => {
      this.assistentService.setcharacter(this.typenService.curCharacter(), () => this.refreshService.refresh());
      this.refreshService.refresh();
      document.getElementById('input-' + this.typenService.curRowIndex).focus();
    };
  }

  // 输入时触发
  onType(text: String) {
    this.typenService.onType(text);
    console.log(this.typenService.curColIndex);
    this.assistentService.setcharacter(this.typenService.curCharacter(), () => this.refreshService.refresh());
    this.refreshService.refresh();  // 刷新显示
    document.getElementById('input-' + this.typenService.curRowIndex).focus();
  }

  ngOnInit() {
  }

  onKey(event) {
    this.typenService.totalKeyHit++;
    if (event.code == 'Backspace') {
      this.typenService.backSpaceKeyHit++;
    }
  }

}
