import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  title = 'Dashboard';
  info: Observable<any>;
  constructor(protected api: ApiService) {
    this.info = api.parentInfo();
  }
}
