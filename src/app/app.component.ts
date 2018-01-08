import { Component, OnInit } from '@angular/core';
import { PersonService } from './service/person.service';
import { PersonDropdownService } from './service/person-dropdown.service';
import { Person } from './interface/person';
import { Dropdown } from './interface/dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonService]
})
export class AppComponent implements OnInit {

  // Necessary variable declarations which will be used in html
  personArr: Person[] = [];
  dropdown: Dropdown[] = [];
  personName:string="";
  honorific:string="";
  personAge:number=null;
  prsn = {} as Person;
  
  // Using constructor, call the PersonService and PersonDropdownService.
  constructor(private _personService: PersonService, private _personDropDown: PersonDropdownService) { }

  ngOnInit() {
    this.dropdown = this._personDropDown.getHonorific();
  }

    // This function is called from html which in turn calls the functions in our Person service.
    addPerson(honorific,name,age) {

      // Assign input values to interface variables.
      this.prsn={
        pHonorific:honorific,
        pName:name,
        pAge:age
      }
  
      // Service function called to add person details to array
      this._personService.addPerson(this.prsn);
  
      // Service function called to return updated person array.
      this.personArr = this._personService.getPerson();
    }

}
