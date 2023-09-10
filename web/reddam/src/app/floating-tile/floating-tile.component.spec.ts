import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingTileComponent } from './floating-tile.component';

describe('FloatingTileComponent', () => {
  let component: FloatingTileComponent;
  let fixture: ComponentFixture<FloatingTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingTileComponent]
    });
    fixture = TestBed.createComponent(FloatingTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
