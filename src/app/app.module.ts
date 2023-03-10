import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; 
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './Components/shared/header/header.component';
import { FooterComponent } from './Components/shared/footer/footer.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { RequestsComponent } from './Components/requests/requests.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { InformationComponent } from './Components/information/information.component';
import { LoginComponent } from './Components/login/login.component';
import { DepartementsComponent } from './Components/departements/departements.component';
import { NewEmployeeComponent } from './Components/popups/new-employee/new-employee.component';
import { LogOutComponent } from './Components/popups/log-out/log-out.component';
import { ConfirmationComponent } from './Components/popups/confirmation/confirmation.component';
import { EmployeeDetailsComponent } from './Components/popups/employee-details/employee-details.component'; 
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewRequestComponent } from './Components/popups/new-request/new-request.component';
import { BaseComponent } from './Layout/base/base.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmployeesComponent,
    RequestsComponent,
    DashboardComponent,
    InformationComponent,
    LoginComponent, 
    DepartementsComponent,
    NewEmployeeComponent,
    LogOutComponent,
    ConfirmationComponent,
    EmployeeDetailsComponent,
    NewRequestComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
