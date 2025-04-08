function Card(title) {

    const language = title.title;

    return (
        <div className="container-info">
            {language ? <h3>{language.title}</h3> : <h4>nessun linguaggio selezionato</h4>}
            {language ? <p>{language.description}</p> : null}
        </div>
    )
}

export default Card;