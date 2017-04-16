import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserEditComponent } from './user-edit.component';


export class UserEditGuard implements CanDeactivate<UserEditComponent> {
  canDeactivate(component: UserEditComponent) {
    if (!component.hasChanges()) {
      alert('Deactivation blocked');
      return false;
    }
    return true;
  }
}
