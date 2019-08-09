import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDerailComponent } from './pokemon-derail.component';

describe('PokemonDerailComponent', () => {
  let component: PokemonDerailComponent;
  let fixture: ComponentFixture<PokemonDerailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDerailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDerailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
