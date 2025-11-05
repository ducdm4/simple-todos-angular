import { Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { List } from './components/list';
import { AppStateService } from '../../core/state/app-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [RouterLink, List],
})
export class Home {}
