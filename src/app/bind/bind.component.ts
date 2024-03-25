import { Component } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrl: './bind.component.css'
})
export class BindComponent {
  name = "Himanshu Patel";
  mydate = new Date();
  person = { name: "Himanshu", age: 21 };
  imagePath="http://loremflickr.com/640/480/nightlife"
  

  func1() {
    this.name = "Yash Khokhar";
    
  }
}
