import { useState } from "react";
import Card from "./Card";

function Btn({ languages }) {

    const [title, settitle] = useState(null);

    return (
        <>
            <div className="container">
                {
                    languages.map((language) =>

                        <button
                            key={language.id}
                            className="btn"
                            onClick={() => settitle(language)}
                        >
                            {language.title}
                        </button >)
                }
            </div>
            <Card title={title} />
        </>


    )
}

export default Btn;