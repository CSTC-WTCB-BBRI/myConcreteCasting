import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './localstorage.service';

describe('LocalstorageService', () => {
  let localStorageService: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    localStorageService = TestBed.inject(LocalStorageService);
    localStorage.setItem('token', 'testToken');
  });

  it('should be created', () => {
    expect(localStorageService).toBeTruthy();
  });

  it('should store the token in the localstorage', () => {
    localStorageService.set('token', 'testToken');
    expect(localStorage.getItem('token')).toEqual('testToken');
  });
  it('should get the token from the localstorage', () => {
    localStorage.setItem('token', 'testToken');
    expect(localStorageService.get('token')).toEqual('testToken');
  });
  it('should remove the token from the localstorage', () => {
    localStorage.setItem('token', 'testToken');
    localStorageService.remove('token');
    expect(localStorage.getItem('token')).toEqual(null);
  });

  it('should clear the localstorage', () => {
    localStorage.setItem('token', 'testToken');
    localStorageService.clear();
    expect(localStorage.getItem('token')).toBe(null);
  });
});
