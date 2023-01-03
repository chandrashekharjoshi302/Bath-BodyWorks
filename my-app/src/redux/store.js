import {
    applyMiddleware,
    legacy_createStore as createStore,
    compose,
  } from 'redux';
  import thunk from 'redux-thunk';
import { reducer } from './reducer';
  
  const composeEnhancers =
    typeof window === 'object' && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_
      ? window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({
        })
      : compose;
  
  const enhancer = composeEnhancers(
    applyMiddleware(thunk),
  
  );
  
  export const store = createStore(reducer,enhancer);