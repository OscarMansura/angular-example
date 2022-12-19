import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosDetailComponent } from './nos-detail.component';

describe('NosDetailComponent', () => {
  let component: NosDetailComponent;
  let fixture: ComponentFixture<NosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
