import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database-deprecated";
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/Client';

@Injectable()
export class ClientService {
  clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;

  constructor(public db:AngularFireDatabase) { 
    this.clients = this.db.list('clients') as FirebaseListObservable<Client[]>;
  }

  getClients(){
    return this.clients;
  }

}
