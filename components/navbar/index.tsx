import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";
const Navbar: React.FC = () => {
  const { push } = useRouter();
  return (
    <Nav>
      <Header>Logo</Header>
      <AddButton onClick={() => push("/add-monument")}>
        <AiOutlinePlus />
      </AddButton>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  padding: 0.5rem 2rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  display: flex;
`;

const Header = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.headline5};
  font-weight: 500;
`;

const AddButton = styled.button`
  display: flex;
  margin-left: auto;
  padding: 0.5rem;
  background: none;
  align-items: center;
  justify-content: center;
`;
