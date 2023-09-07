import { mountElement, unmountElement } from '../core/core.js'

export const Footer = () => {
    const footer = mountElement({tag: 'footer'});

    footer.innerHTML = `
        <div>
            <div>
                <span>
                    RÈGLES DE CONDUITE
                </span>
                <span>
                    SECURITÉ
                </span>
                <span>
                    TOURNOIS
                </span>
                <span>
                    CODES CADEAU                
                </span>
            </div>
            <div>
                <span>
                    RÈGLES DE CONDUITE
                </span>
                <span>
                    SECURITÉ
                </span>
                <span>
                    TOURNOIS
                </span>
                <span>
                    CODES CADEAU                
                </span>
            </div>
            <address>
                Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br>
                Visit us at:<br>
                Example.com<br>
                Box 564, Disneyland<br>
                USA
            </address>
        </div>
        <div>
            <p>© 2023 Ankama. Tous droits réservés</p>
        </div>
    `

    return footer;
}