import { Platform } from '@angular/cdk/platform';
import { NativeDateAdapter } from '@angular/material/core';

export class YearpickerDateAdapter extends NativeDateAdapter {
    
  constructor(matDateLocale: string, platform: Platform) {
    super(matDateLocale, platform);
  }

  // override parse(value: string): Date | null {
  //   const monthAndYearRegex = /(10|11|12|0\d|\d)\/[\d]{4}/;
  //   if (value?.match(monthAndYearRegex)) {
  //     const parts = value.split('/');
  //     const year = Number(parts[1]);
  //   }
  //   return null;
  // }

  // override format(date: Date, displayFormat: any): any {
  //   const year = date.getFullYear();
  //   return year;
  // }
}
export class YearpickeradapterModule { }
