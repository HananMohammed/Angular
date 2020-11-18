import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapJumbtronComponentComponent } from './bootstrap-jumbtron-component.component';

describe('BootstrapJumbtronComponentComponent', () => {
  let component: BootstrapJumbtronComponentComponent;
  let fixture: ComponentFixture<BootstrapJumbtronComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapJumbtronComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapJumbtronComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
