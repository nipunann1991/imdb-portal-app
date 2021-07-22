import { Component, OnInit } from '@angular/core'; 
import { NotificationService } from "../../common/notification/services/notification.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
 
  constructor(
    private notify: NotificationService
  ) { }

  ngOnInit() {
    this.notify.notifyInfo({ Response: "True", Text: "Welcome to OMDB Search, search something in the bar above !"})
  } 
}
