import { TestBed } from '@angular/core/testing';

import { ConfiguracionadminService } from './configuracionadmin.service';

describe('ConfiguracionadminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfiguracionadminService = TestBed.get(ConfiguracionadminService);
    expect(service).toBeTruthy();
  });
});
