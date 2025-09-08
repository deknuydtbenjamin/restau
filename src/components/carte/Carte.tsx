import type { MenuType } from "."
import {menu} from "."
import style from "./carte.module.css"

export default function Carte() {
    return(
        <section>
            <section>
            <h2>Notre carte</h2>
            <p>Découvrez notre sélection de plats faits maison, préparés avec des ingrédients frais et de qualité.</p>
            </section>

            <ul className={style.carte}>
                {menu.map((m:MenuType)=>(
                    <li key={m.id} className={style.plat}>
                        <h3>{m.name}</h3>
                        <p>{m.price} €</p>
                        <button>{m.allergene}</button>
                    </li>
                ))}
            </ul>
        </section>
    )
}