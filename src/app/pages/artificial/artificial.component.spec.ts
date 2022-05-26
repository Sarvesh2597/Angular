import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtificialComponent } from './artificial.component';

describe('ArtificialComponent', () => {
  let component: ArtificialComponent;
  let fixture: ComponentFixture<ArtificialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtificialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtificialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
