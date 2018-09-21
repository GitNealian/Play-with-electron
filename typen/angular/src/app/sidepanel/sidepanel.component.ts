import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { AssistentService } from '../services/assistent.service';
import { RefresherService } from '../services/refresher.service';
import { TypenService } from '../services/typen.service';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent implements OnInit {
  assistentService: AssistentService;
  typenService: TypenService;

  constructor(assistentService: AssistentService, @Inject(ChangeDetectorRef) cd
    , refreshService: RefresherService, typenService: TypenService) {
    this.assistentService = assistentService;
    this.typenService = typenService;
    refreshService.add(cd);
  }

  ngOnInit() {
  }

  restart() {

  }

  pause() {
    if (this.typenService.stPaused) {
      this.typenService.start();
    }
  }

  terminate() {

  }

}
