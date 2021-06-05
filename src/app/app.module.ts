import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { AlertModule } from 'src/app/_alert';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { MyBucketComponent } from './my-bucket/my-bucket.component';
import { SearchComponent } from './search/search.component';
import { RecommendationComponent } from './recommendation/recommendation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatorComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    MyBucketComponent,
    SearchComponent,
    RecommendationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatGridListModule,
    AppRoutingModule,
    FormsModule,
    NgMatSearchBarModule,
    AlertModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }