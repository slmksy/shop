import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
    var filter = filterText ? filterText.toLocaleLowerCase():"";
    
    return filterText ? value.filter((p:Product)=>
      p.name.toLocaleLowerCase().indexOf(filter)!==-1):value;
  }

}
