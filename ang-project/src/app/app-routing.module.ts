import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CarComponent} from './user/car/car.component';

 const routers: Routes = [
   { path: 'contact-us', component:ContactusComponent},
   {
     path: 'user',
     loadChildren: () => import('./user/user.module').then(m => m.UserModule)
   }
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
