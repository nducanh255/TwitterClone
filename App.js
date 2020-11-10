import React from 'react'
import Navigator from './routes/Drawer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer)

export default function App(){
  return(
    <Provider store={store}>
      <Navigator/>
    </Provider>
  )
}