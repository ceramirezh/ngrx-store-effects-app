import * as fromPizzas from '../actions/pizzas.action'
import { Pizza } from '../../models/pizza.model'
import { Action } from 'rxjs/scheduler/Action'


export interface PizzaState {
    data: Pizza[],
    loading: boolean,
    loaded: boolean,
}

export const initialState: PizzaState = {
    data: [
        {
            "name": "Blazin' Inferno",
            "toppings": [
              {
                "id": 10,
                "name": "pepperoni"
              },
              {
                "id": 9,
                "name": "pepper"
              },
              {
                "id": 3,
                "name": "basil"
              },
              {
                "id": 4,
                "name": "chili"
              },
              {
                "id": 7,
                "name": "olive"
              },
              {
                "id": 2,
                "name": "bacon"
              }
            ],
            "id": 1
          }
    ],
    loading: false,
    loaded: false
}

// This exported function is then imported in the index ts
export function reducer(
    state = initialState,
    action:  fromPizzas.PizzaAction
): PizzaState {

    switch(action.type) {
        case fromPizzas.LOAD_PIZZAS: {
            return {
                ...state, 
                loading: true
            }
        }

        case fromPizzas.LOAD_PIZZAS_SUCCESS: {
            return {
                ...state, 
                loading: false,
                loaded: true
            }
        }
        case fromPizzas.LOAD_PIZZAS_FAIL: {
            return {
                ...state, 
                loading: false,
                loaded: false
            }
        }
    }

    return state
}

export const getPizzasLoading = (state: PizzaState) => state.loading 
export const getPizzasLoaded = (state: PizzaState) => state.loaded
export const getPizzas = (state: PizzaState) => state.data