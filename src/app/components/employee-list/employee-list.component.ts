import { Component, inject } from '@angular/core';
import { IEmployee } from '../../interfaces/IEmployee';
import { HttpService } from '../../http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  empList : IEmployee[] = [];
  httpService = inject(HttpService);

  ngOnInit(){
    this.httpService.getAllEmployee().subscribe((result) => {
      // console.log(result);
      this.empList = result;

      console.log(this.empList);
      
    })
  }




}
