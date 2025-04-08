import { useState } from "react";
import Card from "./Card";

function Btn({ languages }) {

    const [title, settitle] = useState(null);
    const [activeId, setActiveId] = useState(null);

    return (
        <>
            <div className="container">
                {
                    languages.map((language) =>

                        <button
                            key={language.id}
                            className={`btn ${activeId === language.id ? 'active' : ''}`}
                            // onClick={() => settitle(language)}
                            onClick={() => {
                                settitle(language);
                                setActiveId(language.id);
                            }}
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