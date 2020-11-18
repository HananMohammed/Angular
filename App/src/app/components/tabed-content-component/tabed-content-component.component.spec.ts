import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabedContentComponentComponent } from './tabed-content-component.component';

describe('TabedContentComponentComponent', () => {
  let component: TabedContentComponentComponent;
  let fixture: ComponentFixture<TabedContentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabedContentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabedContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
