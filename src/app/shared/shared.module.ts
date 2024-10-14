import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    FormsModule,
    AsyncPipe,
  ],
  exports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    FormsModule,
    AsyncPipe,
  ],
})
export class SharedModule { }
