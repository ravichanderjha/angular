import { Injectable } from '@angular/core';

export class LoggerService {

  constructor() { 
    console.log(new Date());
  }

  log(message: string) {
    console.log('LoggerService:', message);
  }
}
