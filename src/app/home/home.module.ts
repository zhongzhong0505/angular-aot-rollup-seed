import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

const homeRoutes: Routes = [
  { path: '',component:HomeComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
