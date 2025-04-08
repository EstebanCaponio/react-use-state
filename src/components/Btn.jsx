// import { useState } from "react";

function Btn({ languages }) {

    // const [title, settitle] = useState(null);

    return (
        languages.map((language) =>
            // <>
            <button
                key={language.id}
                className="btn"
            // onClick={() => settitle(language.id)}
            >
                {language.title}
            </button >

            /* <div>
                {title === language.id && (<p>{language.description}</p>)}
            </div> */

            /* </> */
        )

    )
}

export default Btn;