import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Navigation() {
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
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
          fontWeight: isActive("/gallery") ? "bold" : "normal",
          textDecoration: "none",
        }}
      >
        Gallery
      </Link>

      <Link
        href="/favourites"
        style={{
          fontWeight: isActive("/favourites") ? "bold" : "normal",
          textDecoration: "none",
        }}
      >
        Favourites
      </Link>
    </nav>
  );
}
