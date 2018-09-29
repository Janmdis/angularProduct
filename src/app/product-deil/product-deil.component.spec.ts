import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeilComponent } from './product-deil.component';

describe('ProductDeilComponent', () => {
  let component: ProductDeilComponent;
  let fixture: ComponentFixture<ProductDeilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDeilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
