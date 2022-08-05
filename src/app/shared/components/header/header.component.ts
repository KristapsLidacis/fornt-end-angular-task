import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  headerItems =[
    {
      title: 'Planner',
      path:'/planer',
    },
    {
      title: 'Register',
      path: '/register',
    },
    {
      title: 'Characters',
      path: '/characters',
    },
    {
      title: 'Locations',
      path: '/locations',
    }
  ]

}
