import { HeaderComponent } from './../components/header/header.component';
import { UserCardComponent } from './../components/user-card/user-card.component';
import { UserCardModalComponent } from 'src/components/user-card-modal/user-card-modal.component';
import { UserService } from './../services/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BaseUrlInterceptor } from '../interceptors/base-url-interceptor';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserCardModalComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
