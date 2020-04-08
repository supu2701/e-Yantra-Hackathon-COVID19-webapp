import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {
  }
  getForm() {
    this.signup = this.db.list('signup');
    return this.signup.snapshotChanges();
  }
  onSubmit(form: NgForm) {
    this.getForm();
    this.signup.push(form.value);
    alert('Your form has been submitted');
  }
}
