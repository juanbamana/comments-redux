import { legacy_createStore } from 'redux'
import reducer from './reducers'
import { getStateLocalStorage, setStateLocalStorage } from './utils/localStorage'



const localStorageState = getStateLocalStorage()
const store = legacy_createStore(

    reducer,
    localStorageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


store.subscribe(() => {
    setStateLocalStorage({
        comments: store.getState().comments
    });
});


export default store