import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  private loggingService: LoggingService;
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(loggingService: LoggingService) {
    this.loggingService = loggingService;
  }

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    this.loggingService.logStatusChange(status);
  }
}
