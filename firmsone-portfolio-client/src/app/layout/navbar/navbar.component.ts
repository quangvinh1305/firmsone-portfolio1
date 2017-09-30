import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private nav_items = [
      {
        url: "/",
        title: 'Home'
      },
      {
        url: "about_me_path",
        title: 'About Me'
      },
      {
        url: "contact_path",
        title: 'Contact'
      },
      {
        url: "blogs_path",
        title: 'Blog'
      },
      {
        url: "portfolios_path",
        title: 'Portfolio'
      },
      {
        url: "tech_news_path",
        title: 'Tech News'
      },
    ];

  nav_helper(style, tag_type): String{
    var nav_links = ''

    this.nav_items.forEach(item => {
      nav_links += "<#{tag_type}><a href='#{item[:url]}' class='#{style} #{active? item[:url]}'>#{item[:title]}</a></#{tag_type}>"
    });

    return nav_links
  }
  constructor() { }

  ngOnInit() {
  }
}
