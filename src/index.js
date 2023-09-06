import "./style.scss";
import { Input } from './components/input'

const app = document.querySelector('#app');

app.appendChild(Input({min: 3, rule : /^[^\s@]+@[^\s@]+\.[^\s@]+$/}));

console.log(app)
