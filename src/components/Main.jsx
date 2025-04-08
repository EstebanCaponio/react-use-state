import languages from "../data/languages";
import Btn from "./Btn";

function Main() {

    return (
        <>
            <main>
                <div>
                    <Btn languages={languages} />
                </div>
            </main>
        </>
    )

}

export default Main;