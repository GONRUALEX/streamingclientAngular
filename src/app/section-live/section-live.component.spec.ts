import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLiveComponent } from './section-live.component';

describe('SectionLiveComponent', () => {
  let component: SectionLiveComponent;
  let fixture: ComponentFixture<SectionLiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionLiveComponent]
    });
    fixture = TestBed.createComponent(SectionLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
