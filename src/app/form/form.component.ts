import { Component, OnInit } from '@angular/core';
import { Faculty } from '../faculty';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent  {
  myForm= new FormGroup({
    name: new FormControl(''),
    age: new FormControl('')
});
  faculties : Faculty[]= [];
  idToEdit = -1;

  insert() {
    const formData = this.myForm.value;

    if (this.idToEdit == -1) {
        const faculty: Faculty = {
          name:formData.name as string,
          age: formData.age !== null && formData.age !== undefined ? parseInt(formData.age) : 0
        };
        this.faculties.push(faculty);
    }
    else {
      const formData = this.myForm.value;
      const faculty: Faculty = {
          name:formData.name as string,
          age: formData.age !== null && formData.age !== undefined ? parseInt(formData.age) : 0
      };
      this.faculties[this.idToEdit] = faculty;
      this.idToEdit = -1;
    }
      this.myForm.reset();

  }

  delete(i:any) {
    this.faculties.splice(i,1);
  }
   

  editTheValue(i: any) {
    this.idToEdit=i
    this.myForm.controls.name.setValue(this.faculties[i].name);
    this.myForm.controls.age.setValue(this.faculties[i].age.toString());
  }
}
