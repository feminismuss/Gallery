import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  background: white;
`;

export default function Navigation() {
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <Nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link
        href="/spotlight"
        style={{
          marginRight: "1rem",
          fontWeight: isActive("/spotlight") ? "bold" : "normal",
          textDecoration: "none",
        }}
      >
        Spotlight
      </Link>

      <Link
        href="/gallery"
        style={{
          marginRight: "1rem",
          fontWeight: isActive("/spotlight") ? "bold" : "normal",
          textDecoration: "none",
        }}
      >
        Gallery
      </Link>

      <Link
        href="/favourites"
        style={{
          marginRight: "1rem",
          fontWeight: isActive("/spotlight") ? "bold" : "normal",
          textDecoration: "none",
        }}
      >
        Favourites
      </Link>
    </Nav>
  );
}
