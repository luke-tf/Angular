import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { AuthComponent } from './navegacao/auth/auth.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { UsersComponent } from './users/users.component';
import { PhotosComponent } from './photos/photos.component';
import { rootRouterConfig } from './app.routes';
import { UsersService } from './users/users.service';
import { PhotosService } from './photos/photos.service';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AuthComponent,
    FooterComponent,
    UsersComponent,
    PhotosComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    UsersService,
    PhotosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
