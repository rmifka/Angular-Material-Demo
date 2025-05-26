import {Component, computed, inject, Signal} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatInput, MatLabel, MatPrefix, MatSuffix} from '@angular/material/input';
import {toSignal} from '@angular/core/rxjs-interop';
import {MatIcon} from '@angular/material/icon';
import {MatSelect} from '@angular/material/select';
import {MatOption} from '@angular/material/core';

@Component({
  selector: 'app-material-form',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatFormField,
    MatError,
    MatIcon,
    MatSuffix,
    MatPrefix,
    MatSelect,
    MatOption
  ],
  templateUrl: './material-form.component.html',
  styleUrl: './material-form.component.scss'
})
export class MaterialFormComponent {
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  protected readonly formGroup = this.formBuilder.group({
    field1: ['', [Validators.required]],
    field2: ['', [Validators.required, Validators.email]]
  });
  private readonly formUpdatedSignal: Signal<void> = toSignal(this.formGroup.valueChanges);
  protected readonly formValid: Signal<boolean> = computed(() => {
    this.formUpdatedSignal();
    return this.formGroup.valid;
  });
}
