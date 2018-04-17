import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Injectable()
export class HorariospProvider {
  private PATH = 'horarios/';

  constructor(private db: AngularFireDatabase) {   }
  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('date'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }
 
  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }
 
  save(horarios: any) {
    return new Promise((resolve, reject) => {
      if (horarios.key) {
        this.db.list(this.PATH)
          .update(horarios.key, { date: horarios.date, start: horarios.start, end: horarios.end })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ date: horarios.date, start: horarios.start, end: horarios.end })
          .then(() => resolve());
      }
    })
  }
 
  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }
}

  


