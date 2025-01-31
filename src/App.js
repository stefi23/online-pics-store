import './App.css';
import Header from './components/Header'
import Photos from './pages/Photos'
import Cart from './pages/Cart'
import {Switch, Route} from "react-router-dom"


function App() {
  return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/online-pics-store">
                    <Photos />
                </Route>
                
                <Route path="/online-pics-store/cart">
                    <Cart />
                </Route>
            </Switch>
        </div>
  );
}

export default App;
