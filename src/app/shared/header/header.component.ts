import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() pagename: string = '';

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.pagename || 'Task Manager');
  }
}
