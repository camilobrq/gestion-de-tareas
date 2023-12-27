import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/Dashboard/dashboard/dashboard.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterTaskComponent } from './Components/Task/register-task/register-task.component';
import { ManagementTaskComponent } from './Components/Task/management-task/management-task.component';
import { EditTaskComponent } from './Components/Task/edit-task/edit-task.component';

import { HttpClientModule } from '@angular/common/http';
import { SearchTaskComponent } from './Components/Task/search-task/search-task.component';
import { HomeComponent } from './Components/Dashboard/home/home.component';
import { SignInComponent } from './Components/Login/sign-in/sign-in.component';
import { FooterComponent } from './Components/Login/Shared/footer/footer.component';
import { ToolbarComponent } from './Components/Login/Shared/toolbar/toolbar.component';
import { RegisterComponent } from './Components/Login/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterTaskComponent,
    ManagementTaskComponent,
    EditTaskComponent,
    SearchTaskComponent,
    HomeComponent,
    SignInComponent,
    FooterComponent,
    ToolbarComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
