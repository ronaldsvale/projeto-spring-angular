import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarUsuariosComponent } from './cadastrar-usuarios.component';

describe('CadastrarUsuariosComponent', () => {
  let component: CadastrarUsuariosComponent;
  let fixture: ComponentFixture<CadastrarUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarUsuariosComponent]
    });
    fixture = TestBed.createComponent(CadastrarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
