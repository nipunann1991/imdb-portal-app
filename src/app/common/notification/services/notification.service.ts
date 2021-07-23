import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { INotificationDataError, INotificationDataInfo } from "../models/iNotificationTemplate";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private listenToNotification = new BehaviorSubject(null);
  notification = this.listenToNotification.asObservable();

  constructor() { }

  notifyError(notify: INotificationDataError) {
    this.listenToNotification.next({Text: notify.Error , isError: true})
  }

  notifyInfo(notify: INotificationDataInfo) {
    this.listenToNotification.next({...notify, isError: false})
  }

  notifyHide(){
    this.listenToNotification.next(null)
  }
}
