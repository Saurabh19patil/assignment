import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
    {"id":1, "name":"Pramod", "age":30},
    {"id":2, "name":"Sachin", "age":40},
    {"id":3, "name":"Narayan","age":30},
    {"id":4, "name":"Pravin", "age":30},
    {"id":5, "name":"Sanjay", "age":30}
    ];
  }

 getHeroes() {
    console.log("hello world");
 }




}
