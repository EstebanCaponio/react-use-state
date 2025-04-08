import languages from "../data/languages";
import Btn from "./Btn";

function Main() {

    return (
        <>
            <main>
                <Btn languages={languages} />
            </main>
        </>
    )

}

export default Main;