import languages from "../data/languages";
import Btn from "./Btn";
import Card from "./Card";

function Main() {



    return (
        <>
            <main>
                <div className="container">
                    <Btn languages={languages} />
                </div>
                <Card />
            </main>
        </>
    )

}

export default Main;