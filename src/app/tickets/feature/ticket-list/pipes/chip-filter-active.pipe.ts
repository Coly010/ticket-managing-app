import { Pipe, PipeTransform } from '@angular/core';
import { TicketFilter } from '../+models';

@Pipe({
  name: 'chipFilterActive',
})
export class ChipFilterActivePipe implements PipeTransform {
  transform(filters: TicketFilter[], chipFilterName: TicketFilter): string {
    return filters.includes(chipFilterName) ? 'primary' : 'default';
  }
}
