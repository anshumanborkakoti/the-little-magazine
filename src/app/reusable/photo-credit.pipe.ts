import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'photoCredit'
})
export class PhotoCreditPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if (value.startsWith('Photo credits')) {
      return value;
    }
    return 'Photo credit: ' + value;
  }

}
