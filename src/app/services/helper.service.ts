import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

  constructor() { 

  }

  public static sortArrayByProperty(key, sortByAsc = true) {
    return function(a, b) {

      let comparison = 0;

      if(a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
        const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
        
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        
        comparison = (!sortByAsc) ? (comparison * -1) : comparison;
      }
  
      return comparison; 
    };
  }

  public static stickTextForHtml(textToFormat) {
    return textToFormat.replace(/ /g, '&nbsp;');
  }

}
