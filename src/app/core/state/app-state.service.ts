// src/app/state/app-state.service.ts
import { Injectable, signal, computed } from '@angular/core';

interface AppState {
  listToDo: string[];
}

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  private _state = signal<AppState>({
    listToDo: [],
  });
  readonly listToDo = computed(() => this._state().listToDo);

  constructor() {}

  addItemList(item: string): void {
    const newList = this.listToDo();
    newList.push(item);
    this._state.update((current) => ({ ...current, listToDo: newList }));
  }
  deleteItemList(index: number): void {
    const newList = this.listToDo();
    newList.splice(index, 1);
    this._state.update((current) => ({ ...current, listToDo: newList }));
  }
}
