import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <p>home Works!</p>
    <hr>
    {{paramactiveRoute}}-{{paramrouter}}
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  paramactiveRoute: string;
  paramrouter: string;
  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    //use activeRoute to get queryParams
    this.sub = this.activeRoute.queryParams.subscribe(
      (pm: any) => this.paramactiveRoute = pm['page']
    );
    //use uter.routerState.root to get queryParams
    this.sub = this.router.routerState.root.queryParams.subscribe(
      (pm: any) => this.paramrouter = pm['page']
    );
  }

  ngOnDestroy() {
    //when component is destroyed make unsubscribe
    this.sub.unsubscribe();
  }
}
