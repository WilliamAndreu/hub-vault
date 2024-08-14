import { getSupportedInputTypes } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Signal, effect, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { GithubRouterService } from 'src/core/services/git-hub-router.service';

@Component({
    selector: 'app-bread-crumb',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './breadCrumb.component.html',
    styleUrl: './breadCrumb.component.scss',
})
export class BreadCrumbComponent {
    routesSignal: Signal<string[] | undefined> = signal([]);

    constructor(private gitHubRouterService: GithubRouterService){
        this.getRoutes();
        effect(() => {
            console.log(`The routes is: ${this.routesSignal}`);
          });
    }
    getRoutes() {
        this.routesSignal = toSignal(this.gitHubRouterService.routes$);
    }
    navigateToRoute(routeIndex: number){
        if(this.routesSignal()!.length > 0){
            this.gitHubRouterService.navigateToFolder(routeIndex);
        }
    }
 }
