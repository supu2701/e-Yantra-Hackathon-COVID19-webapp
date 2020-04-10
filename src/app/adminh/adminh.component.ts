import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminh',
  templateUrl: './adminh.component.html',
  styleUrls: ['./adminh.component.css']
})
export class AdminhComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }
  signup: AngularFireList<any>
  ngOnInit(): void {
  }
  getForm() {
    this.signup = this.db.list('adminh');
    return this.signup.snapshotChanges();
  }
  onSubmit(form: NgForm) {
    this.getForm();
    this.signup.push(form.value);
    alert('Your form has been submitted');
  }
}
