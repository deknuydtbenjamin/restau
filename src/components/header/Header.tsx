import style from "./header.module.css"

export default function Header(){
    return(
        <header>
            <p>Logo</p>
            <section>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/">Carte</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </section>
        </header>
    )
}