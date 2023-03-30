import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

declare global {
  interface Window { analytics: any; }
}

ReactDOM.render(<App />, document.getElementById('root'));
