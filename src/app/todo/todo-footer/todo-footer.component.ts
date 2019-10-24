import { Component, OnInit } from '@angular/core';

import * as fromFiltro from '../../filter/filter.actions';
import * as fromTodo from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  pedientes: number;

  filtrosValidos: fromFiltro.filtrosValidos[] = ['todos', 'completados', 'pedientes'];
  filtroActual: fromFiltro.filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.subscribe(state => {
      this.contarPedientes(state.todos);
      this.filtroActual = state.filtro;
    });

  }

  cambiarFiltro(nuevoFiltro: fromFiltro.filtrosValidos) {
    const accion = new fromFiltro.SetFiltroAction(nuevoFiltro);

    this.store.dispatch(accion);
  }

  contarPedientes(todos: Todo[]) {
    this.pedientes = todos.filter(todo => !todo.completado).length;
  }

  borrarCompletados() {
    const accion = new fromTodo.BorrarTodoCompletadosAction();
    this.store.dispatch(accion);
  }

}
