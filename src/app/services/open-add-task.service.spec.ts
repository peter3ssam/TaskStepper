import { TestBed } from '@angular/core/testing';

import { OpenAddTaskService } from './open-add-task.service';

describe('OpenAddTaskService', () => {
  let service: OpenAddTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenAddTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
