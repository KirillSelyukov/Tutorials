import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';

@Component ({
    selector:'my-app',
    template:`
        <h1>{{title}}</h1>
        <a [routerLink]="['Heroes']"> Heroes</a>
        <router-ourlet></router-ourlet>
    `,
    directives: [ROUTER_DIRECTIVES ],
    providers:[ HeroService, ROUTER_PROVIDERS ]
})
@RouteConfig([{
    path:'/heroes',
    name:'Heroes',
    component:'HeroesComponent'
}])
export class AppComponent {
    title = 'Tour of Heroes';
}