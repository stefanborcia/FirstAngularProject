import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFirstangularprojectComponent } from './search-firstangularproject.component';

describe('SearchFirstangularprojectComponent', () => {
  let component: SearchFirstangularprojectComponent;
  let fixture: ComponentFixture<SearchFirstangularprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFirstangularprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFirstangularprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
