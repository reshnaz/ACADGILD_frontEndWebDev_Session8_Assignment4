import { Injectable } from '@angular/core';
import { Dropdown } from './../interface/dropdown';
import { LogService } from './../service/log.service';

@Injectable()
export class PersonDropdownService {

  hnrfc: Dropdown[] = [];

  constructor(private _logService: LogService) {}
  
  /** Get the honorific */
  getHonorific() {
    // Calling our custom logger service
    this._logService.logDataRetrieve=`for dropdown`;
    this._logService.info();
    return this.hnrfc = [{
      honorific: 'Mr.'
    },
    {
      honorific: 'Mrs.'
    }
    ];
  }
}
