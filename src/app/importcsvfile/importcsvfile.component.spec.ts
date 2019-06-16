import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportcsvfileComponent } from './importcsvfile.component';

describe('ImportcsvfileComponent', () => {
  let component: ImportcsvfileComponent;
  let fixture: ComponentFixture<ImportcsvfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportcsvfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportcsvfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
