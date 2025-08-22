import type { MenuType } from "."
import {menu} from "."
import style from "./carte.module.css"

export default function Carte() {
    return(
        <section>
            <ul className={style.carte}>
                {menu.map((m:MenuType)=>(
                    <li key={m.id} className={style.plat}>
                        <h3>{m.name}</h3>
                        <p>{m.price} €</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}