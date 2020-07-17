import { SearchComponent } from './search/search.component';
import { PhotoComponent } from './photo/photo.component';
import { SetComponent } from './set/set.component';
import { AddComponent } from './add/add.component';
import { AllComponent } from './all/all.component';
import { FourOhForComponent } from './four-oh-for/four-oh-for.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'all', component:AllComponent},
  {path:'add', component:AddComponent},
  {path:'set', component:SetComponent},
  {path:'search', component:SearchComponent},
  {path:'photo',component:PhotoComponent},
  { path: 'not-found', component:FourOhForComponent},
  { path: '**', redirectTo:'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
