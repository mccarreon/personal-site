import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  width: auto;
  justify-content: space-around;
  @media screen and ( max-width: 500px ) {
    flex-direction: column;
  }
`

const Header = styled.h2`
  font-size: 32px;
  text-align: center;
`

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 0px;
`

const Project = styled.div`
  width: 33vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: 500px) {
    align-self: center;
    width: 75vw;
  }
`

const Description = styled.p`
  font-size: 16px;

  @media screen and (max-width: 500px) {
    text-align: center;
  }
`

const VerticalLine = styled.div`
  border-left: 3px solid black;
  height: auto;

  @media screen and (max-width: 500px) {
    border-top: 3px solid black;
    width: auto;
  }
`

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  font-size: 16px;
  margin-top: 3px;
`

const TechTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0px;
  margin-top: 0px;
`

export { Row };
export { Header };
export { Title };
export { Project };
export { Description };
export { VerticalLine };
export { List };
export { TechTitle };