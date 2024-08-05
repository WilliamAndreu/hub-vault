import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-bread-crumb',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './breadCrumb.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './breadCrumb.component.scss',
})
export class BreadCrumbComponent { }
