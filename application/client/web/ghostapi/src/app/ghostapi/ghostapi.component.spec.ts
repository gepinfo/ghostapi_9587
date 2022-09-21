import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostapiComponent } from './ghostapi.component';

describe('GhostapiComponent', () => {
  let component: GhostapiComponent;
  let fixture: ComponentFixture<GhostapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhostapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});