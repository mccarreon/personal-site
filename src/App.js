import './App.css';
import clark from './img/clark.JPG';
import CurrentProjects from './components/CurrentProjects';
import styled from 'styled-components';

const BannerTitle = styled.h1`
  font-size: 48px;
`
function App() {
  return (
    <div className="App">
        <div className="banner">
          <BannerTitle>Welcome to Matt's portfolio site!</BannerTitle>
        </div>
        <div className="content">
          <CurrentProjects />
          <p>Thanks for visiting. This site's currently in progress.</p>
          <p>For now, here's a picture of Clark, my old foster dog.</p>
          <img className="clark" src={clark} alt="dog named Clark"></img>

        </div>

    </div>
  );
}

export default App;
