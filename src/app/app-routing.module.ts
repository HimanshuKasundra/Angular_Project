import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BindComponent } from './bind/bind.component';
import { FormComponent } from './form/form.component';
import { StudentComponent } from './student/student.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  { path: "about", component: AboutComponent },
  {path:"contact",component:ContactComponent},
  { path: "binding", component: BindComponent },
  { path: "form", component: FormComponent },
  { path: "student", component: StudentComponent },
  { path: "student/add", component: StudentAddComponent },
  { path: "student/edit/:id", component: StudentAddComponent },
  { path: "student/:id", component: StudentDetailComponent  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
