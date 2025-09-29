import style from "./header.module.css"

export default function Header(){
    return(
        <header className={style.header}>
            <p>Logo</p>
            <section>
                <ul className={style.menu}>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/">Carte</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </section>
        </header>
    )
}