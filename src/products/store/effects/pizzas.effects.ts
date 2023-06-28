import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { map, switchMap, catchError } from "rxjs/operators";

import * as pizzaActions from '../actions/pizzas.action'
import * as fromServices from '../../services'

@Injectable()
export class PizzaEffects {
    constructor(
        private actions$: Actions,
        private pizzaService: fromServices.PizzasService
        ) {
    }
    
  @Effect()  
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS)
    .pipe(
        //Switch to a new observable stream
        switchMap(() => {
            //Returns a brand new observable, new actions
            // we call the service (remember to inject it in the constructor)
            return this.pizzaService.getPizzas().pipe(
                map(pizzas => new pizzaActions.LoadPizzaSuccess(pizzas)),
                catchError(error => of(new pizzaActions.LoadPizzaFail(error)))
        )})
    )

}