import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import {testFn} from "./test/reducer";
import {HomeFn} from "./home/reducer";

const rootReducer = combineReducers({
    testFn:testFn,
    HomeFn:HomeFn
});
//
// const middlewares = [thunkMiddleware];
// const middleWareEnhancer = applyMiddleware(...middlewares);

// 1、创建 store
console.log(rootReducer,'ceshiyixia1');
const store = createStore(rootReducer, composeWithDevTools());
export default store


// export type AppState = ReturnType<typeof rootReducer>;
//
// export default function configureStore() {
//     const middlewares = [thunkMiddleware];
//     const middleWareEnhancer = applyMiddleware(...middlewares);
//
//     const store = createStore(
//         rootReducer,
//         composeWithDevTools(middleWareEnhancer)
//     );
//
//     return store;
// }