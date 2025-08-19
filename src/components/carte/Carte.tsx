import type { MenuType } from "."
import {menu} from "."

export default function Carte() {
    return(
        <section>
            <ul>
                {menu.map((m:MenuType)=>(
                    <li key={m.id}>
                        <h3>{m.name}</h3>
                        <p>{m.price}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}