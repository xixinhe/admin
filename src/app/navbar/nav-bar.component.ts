import { Component} from '@angular/core';
import { ITEMS } from './item-list';


@Component({
	selector: 'nav-bar',
	templateUrl: './nav-bar.component.html'
})

export class NavbarComponent {
	items = ITEMS;
}