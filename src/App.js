import './App.css';
import clark from './img/clark.JPG';

function App() {
  return (
    <div className="App">
        <div className="banner">
          <p>Welcome to Matt's portfolio site!</p>
        </div>
        <div className="content">
          <img className="clark" src={clark} alt="dog named Clark"></img>
          <p>Thanks for visiting. My site's currently in progress.</p>
          <p>For now, here's a picture of Clark.</p>
        </div>
    </div>
  );
}

export default App;
