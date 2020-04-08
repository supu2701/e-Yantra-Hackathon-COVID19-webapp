import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-doct',
  templateUrl: './doct.component.html',
  styleUrls: ['./doct.component.css']
})
export class DoctComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }
  signup: AngularFireList<any>;
  ngOnInit(): void {
  }
  getForm() {
    this.signup = this.db.list('doctor');
    return this.signup.snapshotChanges();
  }
  onSubmit(form: NgForm) {
    this.getForm();
    this.signup.push(form.value);
    alert('Your form has been submitted');
  }
}
