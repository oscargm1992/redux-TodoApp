import * as fromTODO from './todo.actions';
import { Todo } from './models/todo.model';

const todo1 = new Todo('Recoger la casa');
const todo2 = new Todo('Comprar en el Mercadona');
const todo3 = new Todo('Echar gasolina');

todo2.completado = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer(state = estadoInicial, action: fromTODO.Acciones): Todo[] {
    switch (action.type) {
        case fromTODO.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [...state, todo];
        case fromTODO.TOGGLE_ALL_TODO: 
            return state.map( todoEdit => {
                return {
                    ...todoEdit,
                    completado: action.completado
                }
            });
        case fromTODO.TOGGLE_TODO:

            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    };
                } else {
                    return todoEdit;
                }
            });
        case fromTODO.EDITAR_TODO:
                return state.map(todoEdit => {
                    if (todoEdit.id === action.id) {
                        return {
                            ...todoEdit,
                            texto: action.texto
                        };
                    } else {
                        return todoEdit;
                    }
                });
        case fromTODO.BORRAR:
                return state.filter( todoEdit => todoEdit.id !== action.id);
        case fromTODO.BORRAR_TODO_COMPLETADOS:
                return state.filter( todoEdit => !todoEdit.completado);

        default:
            return state;
    }
}

