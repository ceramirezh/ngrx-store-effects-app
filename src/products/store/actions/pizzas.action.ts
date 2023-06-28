import { Action } from '@ngrx/store'
import { Pizza } from '../../models/pizza.model'

// Create Actions
export const LOAD_PIZZAS = '[Products] Load Pizzas'
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success'
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail'


// Acction class creator
export class LoadPizza implements Action {
    readonly type = LOAD_PIZZAS
}
export class LoadPizzaSuccess implements Action {
    readonly type = LOAD_PIZZAS_SUCCESS;
    constructor(public payload: Pizza[]) {}
}
export class LoadPizzaFail implements Action {
    readonly type = LOAD_PIZZAS_FAIL;
    constructor(public payload: any) {}
}

// Export Action Types to make it available to reducer and enable typr check

export type PizzaAction = LoadPizza | LoadPizzaSuccess | LoadPizzaFail
