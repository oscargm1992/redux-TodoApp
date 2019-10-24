import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle All todo';
export const EDITAR_TODO = '[TODO] Editar todo';
export const BORRAR = '[TODO] Borrar todo';
export const BORRAR_TODO_COMPLETADOS = '[TODO] Borrar completados';

export class AgregarTodoAction implements Action {
   readonly type = AGREGAR_TODO;

   constructor(public texto: string) { }
}

export class ToggleTodoAction implements Action {
   readonly type = TOGGLE_TODO;

   constructor(public id: number) { }
}
export class ToggleAllTodoAction implements Action {
   readonly type = TOGGLE_ALL_TODO;

   constructor(public completado: boolean) { }
}

export class EditarTodoAction implements Action {
   readonly type = EDITAR_TODO;

   constructor(public id: number, public texto: string) { }
}

export class BorrarElementoAction implements Action {
   readonly type = BORRAR;

   constructor(public id: number) { }
}

export class BorrarTodoCompletadosAction implements Action {
   readonly type = BORRAR_TODO_COMPLETADOS;
}

// tslint:disable-next-line: max-line-length
export type Acciones =
   AgregarTodoAction |
   ToggleTodoAction |
   EditarTodoAction |
   BorrarElementoAction |
   ToggleAllTodoAction |
   BorrarTodoCompletadosAction;
