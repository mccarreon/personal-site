import styled from 'styled-components';
import './App.css';
import clark from './img/clark.JPG';
import matt from './img/matt.jpg';
import CurrentProjects from './components/CurrentProjects';
import ProfessionalExperience from './components/ProfessionalExperience';

// Need to get rid of in-line styles and the App.css 
// and just use styled-components to be more consistent

const BannerTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 0px;
`
function App() {
  return (
    <div className="App">
        <div className="banner">
          <BannerTitle>Welcome to Matt's portfolio site!</BannerTitle>
        </div>
        <div className="content">
          <img className="me" src={matt} alt="A picture of me holding up my friend"></img>
          <ProfessionalExperience />
          <CurrentProjects />
          <p style={{marginTop: "100px"}}>Thanks for visiting. This site's currently in progress.</p>
          <p>For now, here's a picture of Clark, my old foster dog.</p>
          <img className="clark" src={clark} alt="dog named Clark"></img>
        </div>

    </div>
  );
}

export default App;
