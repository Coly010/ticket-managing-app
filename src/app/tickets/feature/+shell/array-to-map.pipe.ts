import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/users/data-access';

@Pipe({
  name: 'arrayToMap',
})
export class ArrayToMapPipe implements PipeTransform {
  transform(users: User[]): unknown {
    return users
      ? users.reduce((userMap, user) => ({ ...userMap, [user.id]: user }), {})
      : {};
  }
}
