import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store'
import * as fromPizzas from './pizza.reducer'

export interface ProductState {
    pizzas: fromPizzas.PizzaState
}

//
export const reducers: ActionReducerMap<ProductState> = {
    pizzas: fromPizzas.reducer
}

// SELECTORS

/* 
constains a selector thatcontains all our lazy loading module
the string inside the createFeatureSelector comes from whe we created our module (forFeature)
*/ 

export const getProductsState = createFeatureSelector<ProductState>('products')

//the pizza state. We can pass other selectors of the functions we created on the reducer to select the state

export const getPizzaState = createSelector(getProductsState, (state: ProductState) => state.pizzas)
export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas)
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading)
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded)