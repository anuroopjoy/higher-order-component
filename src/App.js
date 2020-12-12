import logo from './logo.svg';
import LinkWrapperComponent from './Link/LinkComponent';
import ButtonWrapperComponent from './Button/ButtonComponent';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <ButtonWrapperComponent text="Click Me"></ButtonWrapperComponent>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <LinkWrapperComponent
                    href="https://www.google.com"
                    text="External Link"
                ></LinkWrapperComponent>
            </header>
        </div>
    );
}

export default App;
