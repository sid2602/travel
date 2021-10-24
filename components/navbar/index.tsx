import styled from "styled-components";

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Header>Logo</Header>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  margin-bottom: 1rem;
  padding: 0.5rem 2rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
`;

const Header = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.headline5};
  font-weight: 500;
`;
