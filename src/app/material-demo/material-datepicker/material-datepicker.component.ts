import {Component, inject} from '@angular/core';
import {
  MatDatepickerModule
} from '@angular/material/datepicker';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-material-datepicker',
  imports: [
    MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, JsonPipe, MatInput
  ],
  templateUrl: './material-datepicker.component.html',
  styleUrl: './material-datepicker.component.scss'
})
export class MaterialDatepickerComponent {
  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

}
