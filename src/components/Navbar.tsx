import styled, { keyframes } from "styled-components";
import { Bio } from "../data/constants";

const blink = keyframes`
  0%, 55% { opacity: 1; }
  56%, 100% { opacity: 0; }
`;

const Bar = styled.nav`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  background: rgba(11, 14, 22, 0.82);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.line_soft};
`;

const Inner = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 28px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 640px) {
    padding: 0 20px;
  }
`;

const Logo = styled.a`
  font-family: ${({ theme }) => theme.mono};
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.ink};
  text-decoration: none;
  white-space: nowrap;

  span {
    color: ${({ theme }) => theme.amber};
    animation: ${blink} 1.1s steps(1) infinite;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: 720px) {
    gap: 18px;
  }
`;

const NavLink = styled.a`
  font-family: ${({ theme }) => theme.mono};
  font-size: 0.82rem;
  color: ${({ theme }) => theme.dim};
  text-decoration: none;
  transition: color 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.amber};
  }

  @media (max-width: 560px) {
    display: none;
  }
`;

const GitHub = styled.a`
  font-family: ${({ theme }) => theme.mono};
  font-size: 0.82rem;
  color: ${({ theme }) => theme.ink};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 6px;
  padding: 7px 14px;
  transition: border-color 0.15s ease, color 0.15s ease;
  white-space: nowrap;

  &:hover {
    border-color: ${({ theme }) => theme.amber};
    color: ${({ theme }) => theme.amber};
  }
`;

const items = [
  { label: "work", href: "#work" },
  { label: "projects", href: "#projects" },
  { label: "stack", href: "#stack" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <Bar aria-label="Main navigation">
      <Inner>
        <Logo href="#top">
          mohit<span>_</span>
        </Logo>
        <Links>
          {items.map((it) => (
            <NavLink key={it.label} href={it.href}>
              {it.label}
            </NavLink>
          ))}
          <GitHub href={Bio.github} target="_blank" rel="noreferrer">
            github ↗
          </GitHub>
        </Links>
      </Inner>
    </Bar>
  );
}
