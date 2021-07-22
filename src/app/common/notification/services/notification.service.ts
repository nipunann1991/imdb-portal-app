import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { INotificationDataError, INotificationDataInfo } from "../models/iNotificationTemplate";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private listenToSearch = new BehaviorSubject(null);
  notification = this.listenToSearch.asObservable();

  constructor() { }

  notifyError(notify: INotificationDataError) {
    this.listenToSearch.next({Text: notify.Error , isError: true})
  }

  notifyInfo(notify: INotificationDataInfo) {
    this.listenToSearch.next({...notify, isError: false})
  }

  notifyHide(){
    this.listenToSearch.next(null)
  }
}
