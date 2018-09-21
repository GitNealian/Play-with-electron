import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { TypenService } from '../services/typen.service';
import { RefresherService } from '../services/refresher.service';

declare var dialog: any;
declare var fs: any;
@Component({
  selector: 'typen-header',
  styleUrls: ['./typen-header.component.css'],
  templateUrl: './typen-header.component.html'
})
export class TypenHeaderComponent implements OnInit {

  typenService: TypenService;
  cd: ChangeDetectorRef;
  text: String;
  refreshService: RefresherService

  constructor(@Inject(ChangeDetectorRef) cd, service: TypenService, refreshService: RefresherService) {

    this.typenService = service;
    refreshService.add(cd);
    this.refreshService = refreshService;
  }

  ngOnInit() {
  }

  openText() {
    dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [
        { name: 'Text', extensions: ['txt'] }
      ]
    }, filePaths => {
      this.typenService.setText(fs.readFileSync(filePaths[0], 'utf-8'));
      this.refreshService.refresh();
    });
  }


}