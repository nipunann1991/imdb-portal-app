import { Component, OnInit } from '@angular/core';
import { NotificationService } from "./services/notification.service";
import { INotificationInfo, INotificationError } from "./models/iNotificationTemplate";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notificationData: INotificationError & INotificationInfo;

  constructor(
    private notify: NotificationService
  ) { }

  ngOnInit(): void {
    this.notify.notification.subscribe((data: INotificationError & INotificationInfo) => {
      this.notificationData = data;  
    })
  }

}
