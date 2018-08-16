import React from 'react';
import ReactDOM from 'react-dom';
import {Switch,HashRouter as Router,Route} from 'react-router-dom';
import Pages from './page';

// 配置路由规则
const routes = [
  {path:'/',component:Pages.Home, exact:true},
  {path:'/counter',component:Pages.Counter},
  {path:'/cart',component:Pages.Cart},
];

const App = (props,context)=>(
  <Router>
    <Switch>
      {
        routes.map((item,index)=>(
           <Route key={item.path} path={item.path} exact={item.exact} component={item.component}/>
        ))
      }
    </Switch>
  </Router>
)
ReactDOM.render(<App />, document.getElementById('root'));


// const rootEl = document.getElementById('root');
// // const render = () => ReactDOM.render(
// //   <App />,
// //   rootEl
// // )
// render();

