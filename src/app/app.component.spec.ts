import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de;

  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: Router, useValue: router },
        FormBuilder
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should get site title to contain text', () => {
    expect(de.querySelector('.site-title').textContent).toContain('Weather App');
  });

  it('should route if search form is valid', () => {
    const formData = {search: 'London'};

    component.search(formData, true);

    expect(router.navigate).toHaveBeenCalledWith(['search', 'London']);
  });

  it('should not route if search form is not valid', () => {
    spyOn(window, 'alert');
    const formData = {search: 'Pluto'};

    component.search(formData, false);

    expect(window.alert).toHaveBeenCalledWith('Please enter a valid location');
  });
});
