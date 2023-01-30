import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {
  form: FormGroup ;

  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar) { 
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      function: ['', Validators.required],
      phone: ['', Validators.required],
      departement: ['', Validators.required],
      manager: ['', Validators.required],
      country: ['', Validators.required]
    })
  }
 
  ngOnInit(): void {}

  openSnackBar() {
    this._snackBar.open('New employee Saved Successfully',' Close' ,{
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  Submit(){
    console.log(this.form.value);
    this.openSnackBar()
  }

}
