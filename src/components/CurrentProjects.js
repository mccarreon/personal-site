import { Row, Header, Title, Project, Description } from './styles';
import { VerticalLine, List, TechTitle } from './styles';
import { LogoGithub } from 'react-ionicons';

const CurrentProjects = () => {
  return (
    <div className="current-projects">
      <Header>In-Progress Personal Projects</Header>
      <Row>
        <Project>
          <Title>This Website!</Title>
          <Description>A simple landing page to get to know me.</Description>
          <TechTitle>Tech Stack</TechTitle>
          <List>
            <li>ReactJS</li>
            <li>HTML/CSS</li>
            <li>nginx</li>
            <li>styled-components</li>
          </List>
          <a href="https://github.com/mccarreon/personal-site"><LogoGithub
            color={'#00000'} 
            title={"Portfolio Github"}
            height="25px"
            width="25px"
          /></a>
        </Project>
        <VerticalLine />
        <Project>
          <Title>My Remote Server</Title>
          <Description>A remote server that I use to self-host webapps (like this site).</Description>
          <TechTitle>Tech Stack</TechTitle>
          <List>
            <li>docker</li>
            <li>traefik</li>
            <li>authelia (SSO)</li>
          </List>
          <a href="https://github.com/mccarreon/remote-server"><LogoGithub
            color={'#00000'} 
            title={"Portfolio Github"}
            height="25px"
            width="25px"
          /></a>
        </Project>
        <VerticalLine />
        <Project>
          <Title>The Line At Riley's!</Title>
          <Description>A website to display a user-submitted photo of the line at Riley's (Chico, CA)</Description>
          <TechTitle>Tech Stack</TechTitle>
          <List>
            <li>ReactJS</li>
            <li>FastAPI</li>
            <li>MongoDB</li>
          </List>
          <a href="https://github.com/mccarreon/thelineatrileys"><LogoGithub
            color={'#00000'} 
            title={"Portfolio Github"}
            height="25px"
            width="25px"
          /></a>
        </Project>
      </Row>
    </div>
  )
}

export default CurrentProjects