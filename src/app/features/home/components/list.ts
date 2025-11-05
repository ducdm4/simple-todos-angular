import { Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppStateService } from '../../../core/state/app-state.service';

@Component({
  selector: 'app-list',
  template: `
    @if (appState.listToDo().length > 0) {
    <div>
      @for (item of appState.listToDo(); track item; let idx = $index) {
      <div class="item-container">
        <span>{{ idx + 1 }}) {{ item }}</span>
        <button (click)="markItemDone(idx)">Mark as done</button>
      </div>
      }
    </div>
    } @else {
    <p>No item yet</p>
    }
  `,
})
export class List {
  appState = inject(AppStateService);

  markItemDone(index: number) {
    this.appState.deleteItemList(index);
  }
}
