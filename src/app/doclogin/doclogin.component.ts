import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.css']
})


export class DocloginComponent implements OnInit {
  signup: Observable<any>;
  constructor(private db: AngularFireDatabase) {
    this.signup = db.list('doctor').valueChanges();
    console.log(email);
    }
  
  

  ngOnInit(): void {

  }

}

// TODO: Replace this with your own data model type


// TODO: replace this with real data from your application
export var email: string;
