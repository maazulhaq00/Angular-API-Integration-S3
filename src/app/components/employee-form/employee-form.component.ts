import { Component, inject } from '@angular/core';
import { IEmployee } from '../../interfaces/IEmployee';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {

  httpService = inject(HttpService)
  router = inject(Router)

  employee : IEmployee = {
    employee_name: "",
    employee_phone: "",
    employee_email: "",
    employee_designation: "",
    employee_salary: ""
  }
  
  handleFormSubmit(){
    this.httpService.createEmployee(this.employee).subscribe((data)=>{
      console.log(data);
      this.router.navigateByUrl("/")
    })
  }
}
