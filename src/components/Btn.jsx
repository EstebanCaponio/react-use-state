function Btn({ languages }) {
    return (
        languages.map((language) => <button key={language.id}>{language.title}</button>)

    )
}

export default Btn;