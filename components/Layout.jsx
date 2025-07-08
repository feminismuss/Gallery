import Navigation from "./Navigation";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <Wrapper>{children}</Wrapper>
    </>
  );
}
