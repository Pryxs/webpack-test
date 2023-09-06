import { mountElement, unmountElement } from '../core/core.js'
import { Input } from './input'

export const Form = () => {
    const form = mountElement({tag: 'form',});

    const button = mountElement({
        tag: 'input',
        attr: [{
            key: 'type',
            value: 'submit',
        }]
    });

    form.append(
        Input({name: 'surname', min: 2, max: 25, placeholder: 'Alice'}),
        Input({name: 'name', min: 2, max: 25, placeholder: 'Bob'}),
        Input({name: 'nickname', min: 5, max: 19, placeholder: 'Alibobo'}),
        Input({name: 'email', min: 3, placeholder: 'alibobo@gmail.com', rule : /^[^\s@]+@[^\s@]+\.[^\s@]+$/}),
        Input({name: 'password', min: 8, max: 30, type: 'password'}),
        Input({name: 'confirm', min: 8, max: 30, type: 'password', autocomplete: true}),
        button
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

    return form;
}