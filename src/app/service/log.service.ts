import { Injectable } from '@angular/core';

// Our custom logging service that will print information to console.
@Injectable()
export class LogService {

  logDataAdd:string="";
  logDataRetrieve:string="";

  constructor() { }

  // This function will log info whenever data is added to array.
  log() {
    console.log(`Adding data ${this.logDataAdd}...`);
  }

  // This function will display info to user when data is being retrieved.
  info() {
    console.log(`Retrieving data ${this.logDataRetrieve}...`)
  }

}
