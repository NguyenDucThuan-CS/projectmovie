import './App.css';
import {createBrowserHistory} from "history"
import { Router, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { HomeTemplate } from './template/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import { Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';
import { CheckoutTemplate } from './template/CheckOutTemplate/ChekOutTemplate';
import Checkout from './pages/Checkout/Checkout';
import { UserTemplate } from './template/UserTemplate/UserTemplate';
import Loading from './components/Loading/Loading';
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Loading />
      <Switch>
      <HomeTemplate path="/home" exact Component={Home}/>
      <HomeTemplate path="/contact" exact Component={Contact}/>
      <HomeTemplate path="/news" exact Component={News}/>
      <HomeTemplate path="/detail/:id" exact Component={ Detail }/>
      <UserTemplate path="/register" exact Component={Register}/>
      <HomeTemplate path="/" exact Component={Home}/>
      <CheckoutTemplate path="/checkout/:id" exact Component={Checkout}/>
      <UserTemplate path="/login" exact Component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
