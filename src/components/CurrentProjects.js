import { Row, Header, Title, Project, Description } from './styles';

const CurrentProjects = () => {
  return (
    <div className="current-projects">
      <Header>Current Projects</Header>
      <Row>
        <Project>
          <Title>This Website!</Title>
          <Description>A simple landing page to show you who I am.</Description>
          <Description>Technologies: ReactJS, styled-components, docker, nginx</Description>
        </Project>
        <Project>
          <Title>My Remote Server</Title>
          <Description>I like to self-host a lot of things as a hobby (like this site).</Description>
        </Project>
        <Project>
          <Title>The Line At Riley's!</Title>
          <Description>Test</Description>
        </Project>
      </Row>
    </div>
  )
}

export default CurrentProjects