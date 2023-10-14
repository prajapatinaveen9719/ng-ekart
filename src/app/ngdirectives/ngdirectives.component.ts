import { Component } from "@angular/core";


@Component({
    selector: 'directives',
    templateUrl: './ngdirectives.component.html',
})

export class ngdirectives {

    /************************ngIF*****************************/
    isHeadingVisible: boolean = false;

    /************************ngFor*****************************/
    Products: any = [
        {
            Name: 'Iphone 13',
            Price: '45k'
        },
        {
            Name: 'Samsung S22 Ultra',
            Price: '60K'
        }
    ]

}