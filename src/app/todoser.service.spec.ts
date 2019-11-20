import { TestBed } from '@angular/core/testing';

import { TodoserService } from './todoser.service';

describe('TodoserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoserService = TestBed.get(TodoserService);
    expect(service).toBeTruthy();
  });
});
