import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCatComponent } from './show-cat.component';

describe('ShowCatComponent', () => {
  let component: ShowCatComponent;
  let fixture: ComponentFixture<ShowCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
