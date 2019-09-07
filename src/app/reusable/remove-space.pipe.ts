import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'removespaces'
})
export class RemoveSpaces implements PipeTransform {

  transform(value: any, ...args: any) {
    return value.trim().replace(/\s/ig, '');
  }
}
