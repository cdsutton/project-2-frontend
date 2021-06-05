import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { MyBucketComponent } from './my-bucket/my-bucket.component';
import { SearchComponent } from './search/search.component';
import { RecommendationComponent } from './recommendation/recommendation.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'loginUser', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'mybucket', component: MyBucketComponent },
  { path: 'search', component: SearchComponent },
  { path: 'recommendation', component: RecommendationComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }