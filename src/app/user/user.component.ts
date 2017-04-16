import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-user',
  template: `
    <h1>User Component </h1>
    <button (click)="onNavigate()">Go Home </button>
    <button (click)="onNavigateWithqueryParams()">Go Page 100 </button>
    <hr>
    {{id}}
    <hr>
    <button (click)="onNavigateUser(20)">Go User 20 </button>
    <button (click)="onBack()">Back</button>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class UserComponent implements OnInit, OnDestroy {

  id: any;
  //declare var for unSubscribe in OnDestroy
  private subscription: Subscription;

  constructor(
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getParamWithSubscribe();
    // this.getParamWithSnapshot();

    console.log(this.id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getParamWithSnapshot() {
    // this.id = this.activatedRoute.snapshot;//result =>Route(url:'user/16', path:'user/:id')
    // this.id = this.activatedRoute.snapshot.params;//result => [object Object] Object {id: "16"}
    //happen just once in component
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  getParamWithSubscribe() {
    // we subscribe for any change on params
    //() is the callback function when a change happen on params
    //(param) is 
    this.subscription = this.activatedRoute.params.subscribe((param: Params) => {
      this.id = param['id'];
    });
  }

  onNavigate() {
    this.router.navigate(['/']);
  }
  onNavigateWithqueryParams() {
    /*Query parameters allow you to pass optional parameters to a route such as pagination information.
    For example, on a route with a paginated list, the URL might look like the following to indicate that we've loaded the second page:
    localhost:3000/product-list?page=2*/
    this.router.navigate(['/'], { queryParams: { page: 100 } });//result => http://localhost:4200/?page=100
  }

  onNavigateUser(value: string) {
    this.router.navigate(['/user', value]);
  }

  onBack() {
    this.location.back();
  }

}
