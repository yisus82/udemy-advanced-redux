import ReactDOM from 'react-dom';
import App from './components/App';
import withStore from './components/withStore';

ReactDOM.render(withStore(App), document.querySelector('#root'));
