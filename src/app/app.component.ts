//import { filter,switchMap } from 'rxjs/operators';
import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-json-table';

  usersData: Array<any> = [];
  usersDataGender: Array<any> = [];
//How to filter data on Object in Angular
//https://stackoverflow.com/questions/66710394/how-to-filter-data-on-object-in-angular
  constructor(private usersService:UsersService){
    
    this.usersService.getAllUsers().subscribe(
      data =>{
        this.usersData = data
        this.usersDataGender = this.usersData.filter(x => x.gender === 'male' && x.status === 'active')

      }
      )

    }    
}
