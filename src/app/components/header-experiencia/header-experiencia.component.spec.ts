import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderExperienciaComponent } from './header-experiencia.component';

describe('HeaderExperienciaComponent', () => {
  let component: HeaderExperienciaComponent;
  let fixture: ComponentFixture<HeaderExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
