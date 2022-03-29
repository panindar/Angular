import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-List',
  template: `
  <h1> Employee List </h1>
    <ul class="primary" *ngFor='let employee of employees'> 
      <li class="list_item"> {{employee.name}} </li>
    </ul>
  `, 
  styles: [`
  .text-success {
    color: green
  }
  .text-failure {
    color: red
  }
  .primary{
    display: grid;
    grid-template-columns: repeat(4, 100px)
  },
  .list_item{
    width: 100px;
    height:100px
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
export class TestComponent implements OnInit {

  public name = "panindar rEddy padumati";
  public person = {
    firstName: "panindar",
    lastName:"padumati"
  }
  public employees = []
  constructor(private _employeeService: EmployeeService) {}
  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data)
  }
 

}
