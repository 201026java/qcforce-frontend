import { Component, OnInit } from '@angular/core';
import { HeaderState } from "../../states/header.state";
import { MenuItem } from "../../interfaces/menu-item.interface";
import { menuClick, subMenuClick } from "../../actions/header.action";
import { Observable } from "rxjs";
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

/**
 * `HeaderComponent` (Angular Component)
 *
 * This component represents the header,
 *  which includes the Revature Logo, 
 *  the menu items (Reports, Batches, Surveys),
 *  the submenu tab items and the logout button
 * 
 * This component uses NgRx HeaderState object to represent
 *  what are the menu items and submenu tab items to show at any given page,
 *  and whether they are active or not.
 *
 * This component also dispatches menuClick and subMenuClick actions
 *  to the NgRx state store whenever a user clicks on a menu item or submenu tab
 *
 */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuList : Observable<MenuItem[]>; 
  subMenuList : Observable<MenuItem[]>; 

  constructor(private router: Router, private store : Store<{header: HeaderState}>) {
    this.menuList = this.store.select(state => state.header.menuList);
    this.subMenuList = this.store.select(state => state.header.subMenuList);
  }
 
  onMenuClick(name: string, routerLink: string) {
    this.store.dispatch(menuClick({ name: name }));
    if (routerLink) {
      this.router.navigate([routerLink]);
    }
  }

  onSubMenuClick(name: string, routerLink: string) {
    this.store.dispatch(subMenuClick({ name: name }));
    if (routerLink) {
      this.router.navigate([routerLink]);
    }
  }

  ngOnInit(): void {
  }

}
