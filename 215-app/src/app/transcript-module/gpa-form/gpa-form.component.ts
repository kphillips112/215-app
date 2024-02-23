import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../course-table/course-table';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-gpa-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './gpa-form.component.html',
  styleUrl: './gpa-form.component.css'
})

export class GpaFormComponent implements OnInit{ 
  @Output() courseAdded = new EventEmitter<Course>();

  gpaForm!: FormGroup;

  //make a list of units to display in the dropdown
  letterGrade = ['Select Option','A', 'B','C','D','F', 'Pass', 'Fail', 'Incomplete',];
  type = ['Select Option','core','major','elective'];

  ngOnInit(): void {
    this.gpaForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      code: new FormControl(null, Validators.required),
      letterGrade: new FormControl(),
      gradePoint: new FormControl(null, Validators.required),
      creditHours: new FormControl(null, Validators.required),
      type: new FormControl(),
    });
  }


    onSubmit() {
      if (this.gpaForm.valid) {
        console.log('form submitted');
        console.log(this.gpaForm.value);
        const newCourse: Course = {
          name: this.gpaForm.value.name,
          code: this.gpaForm.value.code,
          letterGrade: this.gpaForm.value.letterGrade,
          gradePoint: this.gpaForm.value.gradePoint,
          creditHours: this.gpaForm.value.creditHours,
          type: this.gpaForm.value.type,
        };
        console.log(newCourse)
        this.courseAdded.emit(newCourse);
      }
      else {
        console.error('form not submitted');
      }
    }
}