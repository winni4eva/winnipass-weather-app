import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public form;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      search: ['', Validators.required]
    });
  }

  search(model, isValid) {
    if (!isValid) {
      alert('Please enter a valid location');
      return;
    }
    console.log(model);
  }

}
