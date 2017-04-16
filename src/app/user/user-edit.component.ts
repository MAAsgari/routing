import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-user-edit',
  template: `
    <p>user-edit Works!</p>
    <button (click)="done=true" >Done</button>
    <button class="btn btn-alert" (click)="onNavigate()">Go Home</button>
  `,
  styles: []
})
export class UserEditComponent implements OnInit {
  done = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigate() {
    this.router.navigate(['/']);
  }

  hasChanges(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.done) {
      return confirm('Do you want to leave?');
    }
    return true;
  }

}
