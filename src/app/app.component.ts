import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public form;

  constructor(
    private _fb: FormBuilder,
    private router: Router
  ) { }

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
    setTimeout(function() {
      location.reload();
    }, 2000);
    this.router.navigate(['search', model.search]);
  }

}
