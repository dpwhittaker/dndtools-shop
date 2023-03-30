import logo from './logo.svg';
import './App.css';
import { SignInButtons, SignOutButton } from './SignInButtons';
import { auth } from './firebase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {auth.currentUser ? <SignOutButton/> : <SignInButtons/>}
        <div>{JSON.stringify(auth.currentUser)}</div>
      </header>
    </div>
  );
}

export default App;
