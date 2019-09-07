import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import * as moment from 'moment';
declare var $: any;
@Component({
    moduleId: module.id,
    selector: 'sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    constructor() {

    }
    // isNotMobileMenu() {
    //     if ($(window).width() > 991) {
    //         return false;
    //     }
    //     return true;
    // }
    ngOnInit() {
    }
    // ngAfterViewInit() {
    //     var $sidebarParent = $('.sidebar .nav > li.active .collapse li.active > a').parent().parent().parent();

    //     var collapseId = $sidebarParent.siblings('a').attr("href");

    //     $(collapseId).collapse("show");
    // }
}
