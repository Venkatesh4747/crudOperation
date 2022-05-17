import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeeModel } from '../model';
import { Ivalue } from '../employee-dashboard/employee.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss'],
})
export class EmployeeDashboardComponent implements OnInit {
  formValue:any
  EmployeeeModel: EmployeeeModel = new EmployeeeModel();
  employeeData!: any;
  result: any;
  users: any;
  constructor(private fb: FormBuilder, private api: ApiService,private activated:ActivatedRoute) {}

  ngOnInit(): void {
    this.formValue = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: [''],
    });
    this.getEmp();
  }
  postEmp() {
    const payLoad = {
      firstName: this.formValue.value.firstName,
      lastName: this.formValue.value.lastName,
      email: this.formValue.value.email,
      mobile: this.formValue.value.mobile,
      salary: this.formValue.value.salary,
    };
    this.EmployeeeModel.firstName = this.formValue.value.firstName;
    this.EmployeeeModel.lastName = this.formValue.value.lastName;
    this.EmployeeeModel.email = this.formValue.value.email;
    this.EmployeeeModel.mobile = this.formValue.value.mobile;
    this.EmployeeeModel.salary = this.formValue.value.salary;
    this.api.postEmployee(payLoad).subscribe((res: any) => {
      console.log('res', res);
      this.formValue.reset();
      this.getEmp();
    });
  }

  getEmp() {
    this.api.getEmployee().subscribe((res) => {
      this.employeeData = res;
      console.log('em', this.employeeData);
      this.employeeData.forEach((a: any) => {
        // console.log('future', a);
        a.name =a.firstName
        console.log('name',a);

      });
    },error=>{
      // console.log('error',error);
      this.result=error
      console.log('result',this.result.message);

    });
    this.users=this.activated.snapshot.data['data']
  }

  deleteEmp(a: Ivalue) {
    console.log('daaaa',a);

    this.api.deleteEmployee(a.id).subscribe((res) => {
      console.log('delete', res);
      this.getEmp();
    });
  }

  oNedit(a: any) {
    this.EmployeeeModel.id = a.id;
    this.formValue.controls['firstName'].setValue(a.firstName);
    this.formValue.controls['lastName'].setValue(a.lastName);
    this.formValue.controls['email'].setValue(a.email);
    this.formValue.controls['mobile'].setValue(a.mobile);
    this.formValue.controls['salary'].setValue(a.salary);
  }
  updateEmp() {
    this.EmployeeeModel.firstName = this.formValue.value.firstName;
    this.EmployeeeModel.lastName = this.formValue.value.lastName;
    this.EmployeeeModel.email = this.formValue.value.email;
    this.EmployeeeModel.mobile = this.formValue.value.mobile;
    this.EmployeeeModel.salary = this.formValue.value.salary;
    this.api
      .updateEmployee(this.employeeData, this.EmployeeeModel.id)
      .subscribe((res: any) => {
        console.log('5555', res);

        this.formValue.reset();
        this.getEmp();
      });
  }
}
