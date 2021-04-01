import styled from 'styled-components';
import { LogoLinkedin } from 'react-ionicons';

const Link = styled.a`
  color: black;
  text-decoration: none;
  font-size: 20px;
  margin-top: 0px;
`

const ProfessionalExperience = () => {
  return (
    <div className="professional-experience">
      <Link href="https://www.linkedin.com/in/mccarreon">
        <h1 style={{marginTop: "0px"}}>
          <LogoLinkedin
            color={'#00000'} 
            title={"Matt's LinkedIn"}
            height="30px"
            width="30px"
          />
          &nbsp;
          My LinkedIn
        </h1>
      </Link>
    </div>
  )  
}
export default ProfessionalExperience