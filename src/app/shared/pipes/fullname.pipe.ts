import { Pipe, PipeTransform } from '@angular/core';
import {Author} from "../../entity/author.entity";

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(author: Author): string {
    return author.firsname+' '+author.lastname;
  }

}
