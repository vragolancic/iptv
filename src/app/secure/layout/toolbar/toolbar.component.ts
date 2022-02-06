import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {


  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  // Get active path
  get path() {
    return this.route.snapshot.firstChild.routeConfig.path;
  }

}
