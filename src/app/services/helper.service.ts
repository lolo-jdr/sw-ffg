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

  public static multiFieldsSorter(fields) {
    return (a, b) => fields.map(o => {
      let dir = 1;
      if (o[0] === '-') { dir = -1; o = o.substring(1); }
      return a[o] > b[o] ? dir : a[o] < b[o] ? -(dir) : 0;
    }).reduce((p, n) => p ? p : n, 0);
  }

  public static stickTextForHtml(textToFormat) {
    return textToFormat.replace(/ /g, '&nbsp;');
  }

}
