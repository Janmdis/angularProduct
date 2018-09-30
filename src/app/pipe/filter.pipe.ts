import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField: string, keyword: string): any {
    if (!filterField || !keyword) {
      return list;
    }
    return list.filter(item => {
      // tslint:disable-next-line:prefer-const
      let fiedlValue = item[filterField];
      return fiedlValue.indexOf(keyword) >= 0;
    });
  }

}
