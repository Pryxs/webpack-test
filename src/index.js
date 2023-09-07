import "./style.scss";
import { Header } from './components/header'
import { Main } from './components/main'
import { Footer } from './components/footer'

import { Form } from './components/form'

const app = document.querySelector('#app');

app.appendChild(Header());
app.appendChild(Main());
app.appendChild(Form());
app.appendChild(Footer());