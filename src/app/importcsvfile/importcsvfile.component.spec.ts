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

  it('should call sortTable method', () => {
    component.order = true;
    component.csvRecords = 
    ['First name', 'Sur name', 'Issue count', 'Date of birth'],
    ['Theo', 'Jansen', 5, '1978-01-02T00:00:00'], 
    ['Fiona', 'de Vries', 7, '1950-11-12T00:00:00'],
    ['Petra', 'Boersma', 1, '2001-04-20T00:00:00'];
    component.sortTable(1);
  });

  it('should call fileChangeListener method if file name is not ended with .csv', () => {
    let event : any = {
      srcElement : 
      {files : [{name : 'issues.xls'}]},
      target : {files : [{name : 'issues.xls'}]}
    }
    component.fileChangeListener(event);
  });
  // it('should call fileChangeListener method if file name ends with .csv', () => {
  //   let event : any = {
  //     srcElement : 
  //     {files : [{name : 'issues.csv'}]},
  //     target : {files : [{name : 'issues.csv'}]}
  //   }
  //   let fileReader: FileReader;
  //   fileReader = new FileReader();
  //   fileReader.readAsText(event.target.files[0]);
  //   //jasmine.createSpy('FileReader');
   
    
  //   component.fileChangeListener(event);
  // });
});
