import { mountElement, unmountElement } from '../core/core.js'

export const Input = ({name, placeholder, type, rule, min, max}) => {
    const inputContainer = mountElement({
        tag: 'div',
        attr: [{
            key: 'class',
            value: 'input-container',
        }]
    });
    const label = mountElement({
        tag: 'label',
        text: name.charAt(0).toUpperCase() + name.slice(1),
        attr: [{
            key: 'for',
            value: name,
        }]
    });
    const input = mountElement({
        tag: 'input',
        attr: [{
            key: 'placeholder',
            value: placeholder ?? '',
        },{
            key: 'type',
            value: type ?? 'text',
        }, {
            key: 'name',
            value: name,
        }
    ]
    })

    inputContainer.append(label, input)

    input.addEventListener('input', (event) => {
        const errors = [];
        const { value } = event.target;

        if(rule && value && !rule.test(value)) errors.push('matching rule failed')
        if(max && value &&  value.length > max) errors.push('Max character allowed : ' + max)
        if(min && value && value.length < min) errors.push('Min character allowed : ' + min)

        unmountElement(inputContainer.querySelectorAll('.error'));

        const errorsElement = errors.map(error => {
            const element = mountElement({
                tag: 'span',
                text: error,
                attr: [{
                    key: 'class',
                    value: 'error',
                }]
            })

            return element
        })
        
        inputContainer.append(...errorsElement)
    })

    return inputContainer;
}