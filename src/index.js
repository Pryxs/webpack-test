import "./style.scss";
import { Input } from './components/input'

const app = document.querySelector('#app');

app.appendChild(Input({}));

console.log(app)
