import { TestBed } from '@angular/core/testing';

import { TextConverterService } from './text-converter.service';

describe('TextConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextConverterService = TestBed.get(TextConverterService);
    expect(service).toBeTruthy();
  });
  it('should test convertToText - when numberInput = "" ', () => {
    const service: TextConverterService = TestBed.get(TextConverterService);
    service.convertToText('');
    expect(service.resultStr).toEqual('');
  });
  it('should test convertToText - when numberInput = "0#1#2#26#27#52" ', () => {
    const service: TextConverterService = TestBed.get(TextConverterService);
    service.convertToText('0#1#2#26#27#52');
    expect(service.resultStr).toEqual('ABCABA');
  });
  it('should test convertToText - when numberInput = "#" ', () => {
    const service: TextConverterService = TestBed.get(TextConverterService);
    service.convertToText('#');
    expect(service.resultStr).toEqual('');
  });
  it('should test convertToText - when numberInput = "25#" ', () => {
    const service: TextConverterService = TestBed.get(TextConverterService);
    service.convertToText('25#');
    expect(service.resultStr).toEqual('Z');
  });
});
