import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TododescComponent } from './tododesc.component';

describe('TododescComponent', () => {
  let component: TododescComponent;
  let fixture: ComponentFixture<TododescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TododescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TododescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
