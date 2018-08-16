import asyncComponent from './asyncComponent';

export default {
  Home:asyncComponent(()=>import('./components/index/App')),
  Counter:asyncComponent(()=>import('./components/counter/App')),
  Cart:asyncComponent(()=>import('./components/cart/App')),
};