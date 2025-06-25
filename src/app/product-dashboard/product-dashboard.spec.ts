import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDashboard } from './product-dashboard';

describe('ProductDashboard', () => {
  let component: ProductDashboard;
  let fixture: ComponentFixture<ProductDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
