import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable()
export class ClientService {
  clients: Observable<any[]>;
  

  constructor(public db:AngularFireDatabase) { 
    this.clients = this.db.list('clients').valueChanges();
  }

  getClients(){
    return this.clients;
  }

}
