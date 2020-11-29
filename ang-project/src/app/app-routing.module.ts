import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';

 const routers: Routes = [
   { path: 'contact-us', component:ContactusComponent},
];
@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routers),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
