import style from "./footer.module.css"

export default function Footer() {
    return(
        <footer className={style.footer}>

        <section className={style.info}>
            <h2>logo</h2>
            <section>
                <p>Ouvert du mercredi au dimanche midi et soir</p>
                <p>telephone: 00 00 00 00 00</p>
                <p>adresse: 00 rue des rue à paris 00000 </p>
            </section>

        </section>
        </footer>
    )
}