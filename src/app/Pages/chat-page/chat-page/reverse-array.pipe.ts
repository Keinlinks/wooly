import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseArray',
  standalone: true,
})
export class ReverseArrayPipe implements PipeTransform {
  transform(value: string[]): string[] {
    return (value = value.reverse());
  }
}
