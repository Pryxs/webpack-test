import { mountElement, unmountElement } from '../core/core.js'
import colere from '../assets/colere.png';
import bond from '../assets/bond.png';
import celeste from '../assets/celeste.png';


export const Main = () => {
    const main = mountElement({tag: 'main'});

    main.innerHTML = `
        <article id="history">
            <div>
                <h2>Histoire</h2>
                <h3>Guerrier téméraire</h3>
                <p>
                    Les Iops sont des guerriers fonceurs et sans reproche ! Une chose est sûre : les Iops savent faire parler les armes. D'ailleurs, se retrouver pris dans une bagarre au moins une fois par jour est pour eux un signe de bonne santé. Leur tempérament impétueux fait des Iops des paladins de l'extrême, capables du meilleur... comme du pire !    
                </p>
            </div>

            <iframe width="463" height="290" src="https://www.youtube.com/embed/EaOZNYoZBms" title="Le Cœur d&#39;Iop – DOFUS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </article>

        <article id="spells">
            <h2>Sorts</h2>
            <div>
                <div>
                    <img width='100' height='100' src="${colere}" />
                    <details>
                        <summary>Colère de Iop</summary>
                        <p>
                        Les dommages du sort sont augmentés pour un tour au troisième tour après son lancer.</p>
                    </details>
                </div>

                <div>
                    <img width='100' height='100' src="${bond}" />
                    <details>
                        <summary>Bond</summary>
                        <p>
                            Téléporte le lanceur sur la case ciblée et augmente les dommages subis par les ennemis en zone.
                        </p>
                    </details>
                </div>

                <div>
                    <img width='100' height='100' src="${celeste}" />
                    <details>
                        <summary>Epée Céleste</summary>
                        <p>
                        Occasionne de lourd dommages Air en zone.
                        </p>
                    </details>
                </div>
            </div>
        </article>
    `
    return main;
}