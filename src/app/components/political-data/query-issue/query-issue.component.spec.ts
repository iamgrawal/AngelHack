/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QueryIssueComponent } from './query-issue.component';

describe('QueryIssueComponent', () => {
  let component: QueryIssueComponent;
  let fixture: ComponentFixture<QueryIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
