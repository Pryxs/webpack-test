import { mountElement } from '../core/core.js'

export const Input = ({placeholder, type, rule}) => {
    const input = mountElement({
        tag: 'input',
        attr: [{
            key: 'placeholder',
            value: placeholder ?? '',
        },{
            key: 'type',
            value: type ?? 'text',
        }
    ]
    })

    if(rule) {
        input.addEventListener('input', (event) => {
            console.log(event.target.value)
        })
    }
    
    return input;
}