import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppStateService } from '../../core/state/app-state.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create.html',
  imports: [FormsModule],
})
export class CreateItem {
  private router = inject(Router);
  appState = inject(AppStateService);
  itemInput = '';

  navigateToHome() {
    this.router.navigate(['/']);
  }
  handleAddItem() {
    console.log('itemInput', this.itemInput);
    this.appState.addItemList(this.itemInput);
    this.navigateToHome();
  }
}
