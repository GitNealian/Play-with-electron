import { Injectable } from '@angular/core';

declare var SQLite3: any;

@Injectable({
  providedIn: 'root'
})
export class AssistentService {

  database: String = '/home/nealian/Workspace/electron/typen/data/data.db';
  img_base64: String;
  code: String;
  dbOpened: boolean = false;
  db: any;
  img_empty_base64: String = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSgBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIADQA2QMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APqmgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPzW+LH/JU/GX/Yavf/AEe9AH6U0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB+a3xY/wCSp+Mv+w1e/wDo96AP0poAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD81vix/yVPxl/wBhq9/9HvQB+lNABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAfmt8WP+Sp+Mv+w1e/8Ao96AP0poAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD81vix/yVPxl/2Gr3/0e9AH6U0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB+a3xY/5Kn4y/wCw1e/+j3oA9/8A+Guf+pJ/8q3/ANpoAP8Ahrn/AKkn/wAq3/2mgA/4a5/6kn/yrf8A2mgA/wCGuf8AqSf/ACrf/aaAD/hrn/qSf/Kt/wDaaAD/AIa5/wCpJ/8AKt/9poAP+Guf+pJ/8q3/ANpoAP8Ahrn/AKkn/wAq3/2mgA/4a5/6kn/yrf8A2mgA/wCGuf8AqSf/ACrf/aaAD/hrn/qSf/Kt/wDaaAD/AIa5/wCpJ/8AKt/9poAP+Guf+pJ/8q3/ANpoAP8Ahrn/AKkn/wAq3/2mgA/4a5/6kn/yrf8A2mgA/wCGuf8AqSf/ACrf/aaAD/hrn/qSf/Kt/wDaaAD/AIa5/wCpJ/8AKt/9poAP+Guf+pJ/8q3/ANpoAP8Ahrn/AKkn/wAq3/2mgA/4a5/6kn/yrf8A2mgA/wCGuf8AqSf/ACrf/aaAD/hrn/qSf/Kt/wDaaAD/AIa5/wCpJ/8AKt/9poAP+Guf+pJ/8q3/ANpoAP8Ahrn/AKkn/wAq3/2mgA/4a5/6kn/yrf8A2mgD5r8Wav8A8JB4q1nWfI+z/wBo3s155O/f5fmOX27sDOM4zgZ9KAP/2Q==';

  constructor() {
    this.img_base64 = this.img_empty_base64;
    this.code = '';
    this.db = this.database = new SQLite3.Database(this.database, function (err) {
      if (!err) {
        this.dbOpened = true;
      } else {
        console.log(err);
      }
    });
  }

  setcharacter(c: String, refresh?: () => void) {
    this.db.all('select * from data where character = ?', [c], (err, rows: Array<any>) => {
      if (!err) {
        if (rows.length == 1) {
          this.code = rows[0].code;
          this.img_base64 = rows[0].img;
        }else{
          this.code = '';
          this.img_base64 = this.img_empty_base64;
        }
        if(refresh){
          refresh();
        }
      } else {
        console.log(err);
      }
    });
    console.log(this.code);
  }


}
