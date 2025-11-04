import { Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppStateService } from '../../core/state/app-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [RouterLink],
})
export class Home {
  appState = inject(AppStateService);

  markItemDone(index: number) {
    this.appState.deleteItemList(index);
  }
}
