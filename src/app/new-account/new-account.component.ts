import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  private _loggingService: LoggingService;
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(loggingService: LoggingService) {
    this._loggingService = loggingService;
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

    this._loggingService.logStatusChange(status);
  }
}
