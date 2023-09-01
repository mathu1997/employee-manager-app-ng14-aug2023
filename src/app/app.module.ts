import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuListComponent } from './shared/components/menu-list/menu-list.component';
import { HomeComponent } from './home/components/home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { AboutUsComponent } from './about/components/about-us/about-us.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import { UserInfoComponent } from './concepts/components/user-info/user-info.component';
import { ReportsComponent } from './concepts/components/reports/reports.component';
import { ColorizerDirective } from './concepts/directives/colorizer.directive';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesModule } from './employees/employees.module';

// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuListComponent,
    HomeComponent,
    ConceptsComponent,
    AboutUsComponent,
    ContactComponent,
    UserInfoComponent,
    ReportsComponent,
    ColorizerDirective
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    EmployeesModule
  ],
  providers: [],
  bootstrap: [AppComponent] // AppModule is bootstrapped with a comp -- AppComponent
})
export class AppModule {}
