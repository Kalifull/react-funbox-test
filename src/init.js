import { Provider } from 'react-redux';

import App from './components/App';

import store from './store';

import './styles/app.scss';

const init = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default init;
