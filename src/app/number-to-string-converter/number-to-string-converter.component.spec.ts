import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberToStringConverterComponent } from './number-to-string-converter.component';
import { FormsModule } from '@angular/forms';


describe('NumberToStringConverterComponent', () => {
  let component: NumberToStringConverterComponent;
  let fixture: ComponentFixture<NumberToStringConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberToStringConverterComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberToStringConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should text onBtnClick - numberInput = 0#1', () => {
    component.numberInput = '0#';
    component.onBtnClick('1');
    expect(component.textDisplay).toEqual('AB');
  });
  it('should text onBtnClick - numberInput = 259#1', () => {
    component.numberInput = '259#';
    component.onBtnClick('1');
    expect(component.textDisplay).toEqual('ZB');
  });
  it('should text onBtnClick - numberInput = 0#1#2#26#27#52', () => {
    component.numberInput = '0#1#2#26#27#5';
    component.onBtnClick('2');
    expect(component.textDisplay).toEqual('ABCABA');
  });
  it('should text onBtnClick - numberInput = 0#1#2#26#27#5<-', () => {
    component.numberInput = '0#1#2#26#27#52';
    component.onBtnClick('<-');
    expect(component.textDisplay).toEqual('ABCABF');
  });
});
