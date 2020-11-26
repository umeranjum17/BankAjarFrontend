import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { BankIconComponent } from './components/bank-icon/bank-icon.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BankIconComponent,
    CustomModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    ReactiveFormsModule
  ],
  providers: [

    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
