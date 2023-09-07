import { mountElement, unmountElement } from '../core/core.js'
import { Input } from './input'
import background from '../assets/background.jpg';


export const Header = () => {
    const header = mountElement({tag: 'header'});

    header.innerHTML = `
        <div class="content-wrapper">
            <h1>Le coeur de Iop</h1>
            <nav>
                <ul>
                    <li><a href="#history">l'Histoire</a></li>
                    <li><a href="#spells">Les sorts</a></li>
                    <li><a href="#form">Cours personanlisé</a></li>
                </ul>
            </nav>
        </div>
    `

    return header;
}