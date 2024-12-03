import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConHeaderComponent } from './con-header.component';

describe('ConHeaderComponent', () => {
  let component: ConHeaderComponent;
  let fixture: ComponentFixture<ConHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
