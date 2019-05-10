import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionadminComponent } from './configuracionadmin.component';

describe('ConfiguracionadminComponent', () => {
  let component: ConfiguracionadminComponent;
  let fixture: ComponentFixture<ConfiguracionadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
