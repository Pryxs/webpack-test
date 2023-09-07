import { mountElement, unmountElement } from '../core/core.js'
import { Input } from './input'

export const Form = () => {
    const container = mountElement({tag: 'div', attr: [{
        key: 'class', 
        value: 'form-wrapper'
    } , {
        key: 'id', 
        value: 'form'
    }]});
    const form = mountElement({tag: 'form',});

    const title = mountElement({
        tag: 'h2',
        text: 'S\'inscrire maintenant !'
    });

    const button = mountElement({
        tag: 'input',
        attr: [{
            key: 'type',
            value: 'submit',
        }]
    });

    form.append(
        title,
        Input({name: 'surname', min: 2, max: 25, placeholder: 'Alice'}),
        Input({name: 'name', min: 2, max: 25, placeholder: 'Bob'}),
        Input({name: 'nickname', min: 5, max: 19, placeholder: 'Alibobo'}),
        Input({name: 'email', min: 3, placeholder: 'alibobo@gmail.com', rule : /^[^\s@]+@[^\s@]+\.[^\s@]+$/}),
        button,
    );

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputs = form.querySelectorAll('input[type=text], input[type=password]');
        const errors = form.querySelectorAll('.error:not(.-global)');

        if([...inputs].filter(e => !e.value).length) {
            const errorElement = mountElement({
                tag: 'span',
                text: '/ ! \\ Empty fields',
                attr: [{
                    key: 'class',
                    value: 'error -global',
                }]
            })
    
            form.append(errorElement)
            return;
        }

        if(!errors.length) form.submit();
    });

    container.appendChild(form)

    return container;
}