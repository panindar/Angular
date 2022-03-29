import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-Details',
  template: `
  <h1> Employee Details </h1>
    <ul class="primary" *ngFor='let employee of employees'> 
      <li class="list_item">{{employee.id}}.{{employee.name}}-{{employee.email}}</li>
    </ul>
  `, 
  styles: [`
  .text-success {
    color: green
  }
  .primary{
    display: grid;
    grid-template-columns: repeat(4, 100px);
  },
  .list_item{
    width: 100px;
    height:100px
  }
  .text-failure {
    color: red
  }
  .text-special {
    font-style: italic
  }
  h2 {
    color: black
  }
  button{
    cursor: pointer
  }
  `]
})
export class EmployeeDetails implements OnInit {

  public employees = []

  constructor(public _employeeService: EmployeeService) { }
  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data)
  }
 

}
