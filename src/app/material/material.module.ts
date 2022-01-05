import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

const MaterialComponent = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatInputModule,
  MatTooltipModule,
  MatIconModule,
  MatGridListModule
]
=======
import { CommonModule } from '@angular/common';


>>>>>>> f96ce9ce58195eae9e5b2883506f5ed9242341c6

@NgModule({
  declarations: [],
  imports: [
<<<<<<< HEAD
    MaterialComponent
  ],
  exports: [
    MaterialComponent
=======
    CommonModule
>>>>>>> f96ce9ce58195eae9e5b2883506f5ed9242341c6
  ]
})
export class MaterialModule { }
