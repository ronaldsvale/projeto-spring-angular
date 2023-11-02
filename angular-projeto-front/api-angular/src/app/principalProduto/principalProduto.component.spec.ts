import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincipalProdutoComponent } from './principalProduto.component';

describe('PrincipalProdutoComponent', () => {
  let component: PrincipalProdutoComponent;
  let fixture: ComponentFixture<PrincipalProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalProdutoComponent]
    });
    fixture = TestBed.createComponent(PrincipalProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: () => void) {
  throw new Error('Função não implementada.');
}

function expect(component: PrincipalProdutoComponent) {
  throw new Error('Função não implementada.');
}

