import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employees = [];
  products: any

  constructor(private _employeeService: EmployeeService) {
    this.products = [
      {
        "id": 123,
       "name":"mobile",
       "brand": "nokia",
       "price": 100000
      },{
        "id": 321,
       "name":"maruti 800",
       "brand": "maruti",
       "price": 3000000  
      },{
        "id": 523,
       "name":"t-shirt",
       "brand": "spyker",
       "price": 1000
      },{
        "id": 13,
       "name":"laptop",
       "brand": "acer",
       "price": 100000
      }
     ]
   }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
    // this._employeeService.getHeroes();
  }

sayHellow() {

this._employeeService.getHeroes();
}

}
