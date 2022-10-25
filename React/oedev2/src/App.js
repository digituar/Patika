import ToDoApp from "./Components/ToDoApp"
import './App.css';

function App() {
    const creatorUrl = "https://codepen.io/dmitrysharabin/pen/MWgQNYZ";
    const patikaUrl = "https://app.patika.dev/digituar";
    const reactImage = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";
    const myGithubUrl = "https://github.com/digituar";

    return ( <div className = "App" >
                <ToDoApp / >
                <div className = 'info' >
                    <a href = {patikaUrl} target = "blank" > Patika.dev </a>
                    <p className="names">cloned by <a href={creatorUrl}>Dmitry Sharabin</a></p>
                    React-ed by <img alt="react" className="reacted" src={reactImage}></img> <a className="names" href={myGithubUrl}>Github</a>
                </div>
            </div>
    );
}

export default App;