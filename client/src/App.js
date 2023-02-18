/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
/*import Messenger from "./components/Messenger";

import { GoogleOAuthProvider } from '@react-oauth/google';

import AccountProvider from "./context/AccountProvider";

function App(){

  const clientId = '836498164319-74qgqci1vqseu577c229td2ganvqmn6i.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}


export default App;*/

import AccountProvider from "./context/AccountProvider";

import Messenger from "./components/Messenger";

import { GoogleOAuthProvider } from '@react-oauth/google';

function App(){

  const clientId = '836498164319-74qgqci1vqseu577c229td2ganvqmn6i.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}


export default App;