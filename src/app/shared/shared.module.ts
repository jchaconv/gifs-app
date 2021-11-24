import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiderbarComponent } from './siderbar/siderbar.component';



@NgModule({
  declarations: [
    SiderbarComponent
  ],
  exports:[
    SiderbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
