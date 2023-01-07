import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleofficeComponent } from './titleoffice.component';

describe('TitleofficeComponent', () => {
  let component: TitleofficeComponent;
  let fixture: ComponentFixture<TitleofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleofficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
