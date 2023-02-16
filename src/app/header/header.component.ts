import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() data;
  view = 'calendar';
  constructor(private router: Router) {}

  ngOnInit() {}
  goList() {
    if (this.view !== 'list') {
      this.router.navigate(['calendar/list']);
      this.view = 'list';
    } else {
      this.router.navigate(['calendar/' + this.data.name]);
      this.view = 'calendar';
    }
  }
}
