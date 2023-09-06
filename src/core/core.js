export const mountElement = ({tag, text, attr}) => {
    const element = document.createElement(tag)

    if(text) element.innerHTML = text;

    if(attr) {
        attr.forEach(attribute => {
            const {key, value} = attribute;
            element.setAttribute(key, value)
        });
    }

    return element;
}

export const unmountElement = (elements) => {
    for (const elem of elements) {
        elem.remove();
    }
}