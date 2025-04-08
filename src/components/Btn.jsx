function Btn({ languages }) {
    return (
        languages.map((language) => <button>{language.title}</button>)

    )
}

export default Btn;