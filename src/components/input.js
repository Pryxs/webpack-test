import { mountElement, unmountElement } from '../core/core.js'

export const Input = ({placeholder, type, rule, min, max}) => {
    const inputContainer = mountElement({ tag: 'div'});
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

    inputContainer.appendChild(input)

    input.addEventListener('input', (event) => {
        const errors = [];

        const { value } = event.target;

        if(rule && !rule.test(value)) errors.push('matching rule failed')
        if(max && value.length &&  value.length > max) errors.push('Max character allowed : ' + max)
        if(min && value.length && value.length < min) errors.push('Min character allowed : ' + min)

        unmountElement(inputContainer.querySelectorAll('.error'));

        if(errors.length) {
            const error = mountElement({
                tag: 'span',
                text: errors[0],
                attr: [{
                    key: 'class',
                    value: 'error',
                }]
            })
            console.log(error)
            inputContainer.appendChild(error)
        }
    })

    return inputContainer;
}