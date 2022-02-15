import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormSuccessComponent } from './Atoms/success-modal/form-success.component';
import { SvgComponent } from './Atoms/success-modal/svg.component';
import { HeaderComponent } from './Molecules/Header/header.component';
import { DetailComponent } from './Molecules/AccountPanel/detail.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    FormSuccessComponent,
    SvgComponent,
    HeaderComponent,
    DetailComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
