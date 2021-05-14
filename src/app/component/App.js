import React , {Component} from 'react';
import Screen from './Screen';
import './App.css';
import { BrowserRouter as Router, Route, Switch , useHistory} from "react-router-dom";
import Screen2 from './Screen2';
import store from '../redux/store';
import { Provider } from 'react-redux';
import SuccessLogin from './SuccessLogin';

import * as serviceWorker from '../../serviceWorker';
function App() {
  
  
  //const dispatch = useDispatch();
  
  return (
    <div className="App">
    <Provider store={store}>
    <Router >
    <Switch>
        
    <Route path="/Screen2">
          <Screen2 />
        </Route> 
        <Route path = "/Successlogin">

          <SuccessLogin/>
        </Route>
        <Route path="/">
          <Screen />
        </Route>
       
        
      </Switch>
      </Router>
    </Provider>
    </div>
  );
}
serviceWorker.unregister();
export default App;
