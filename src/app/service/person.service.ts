import { Injectable } from '@angular/core';
import { Person } from './../interface/person';
import { LogService } from './../service/log.service';

@Injectable()
export class PersonService {

  // Array of imported interface type used to store input values.
  personArr:Person[]=[];

  constructor(private _logService: LogService) {}

  // Service function which will return (GET) the array of interface object.
  getPerson():Person[] {
    // Calling our custom logger service
    this._logService.logDataRetrieve=`for table`;
    this._logService.info();
    return this.personArr;
  }

  // Service function that adds values in the array by using unshift() method.
  addPerson(prsn:Person) {
    // Calling our custom logger service
    this._logService.logDataAdd=`to array`;
    this._logService.log();
    this.personArr.unshift(prsn);
  }

}
