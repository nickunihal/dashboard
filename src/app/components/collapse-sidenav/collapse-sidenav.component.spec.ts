import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseSidenavComponent } from './collapse-sidenav.component';

describe('CollapseSidenavComponent', () => {
  let component: CollapseSidenavComponent;
  let fixture: ComponentFixture<CollapseSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
