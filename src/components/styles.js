import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  width: 100vw;
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
`

const Project = styled.div`
  width: 33vw;

  @media screen and (max-width: 500px) {
    align-self: center;
  }
`

const Description = styled.p`
  font-size: 16px;
`
export { Row };
export { Header };
export { Title };
export { Project };
export { Description }