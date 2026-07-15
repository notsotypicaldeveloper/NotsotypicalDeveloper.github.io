import styled from "styled-components";
import { Bio } from "../../data/constants";
import { Container, Reveal } from "../shared";

const Wrap = styled.section`
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Glow = styled.div`
  position: absolute;
  bottom: -260px;
  left: 50%;
  transform: translateX(-50%);
  width: 720px;
  height: 480px;
  background: radial-gradient(
    ellipse,
    rgba(245, 180, 83, 0.08),
    transparent 65%
  );
  pointer-events: none;
`;

const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.mono};
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.amber};
  margin-bottom: 18px;

  &::before {
    content: "~/";
    color: ${({ theme }) => theme.faint};
  }
`;

const Big = styled.h2`
  font-family: ${({ theme }) => theme.display};
  font-size: clamp(2rem, 5vw, 3.6rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.05;
  max-width: 18ch;
  margin: 0 auto 22px;
`;

const Sub = styled.p`
  color: ${({ theme }) => theme.dim};
  font-size: 1rem;
  max-width: 46ch;
  margin: 0 auto 40px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 28px;
`;

const Primary = styled.a`
  font-family: ${({ theme }) => theme.mono};
  font-size: 0.92rem;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.bg};
  background: ${({ theme }) => theme.amber};
  border-radius: 8px;
  padding: 15px 30px;
  transition: background 0.15s ease, transform 0.15s ease;

  &:hover {
    background: #ffc76e;
    transform: translateY(-1px);
  }
`;

const Secondary = styled.a`
  font-family: ${({ theme }) => theme.mono};
  font-size: 0.92rem;
  text-decoration: none;
  color: ${({ theme }) => theme.ink};
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 8px;
  padding: 14px 30px;
  transition: border-color 0.15s ease, color 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.amber};
    color: ${({ theme }) => theme.amber};
  }
`;

const Email = styled.p`
  font-family: ${({ theme }) => theme.mono};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.faint};
`;

const Footer = styled.footer`
  margin-top: 110px;
  border-top: 1px solid ${({ theme }) => theme.line_soft};
  padding: 28px 0 34px;
`;

const FootRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  font-family: ${({ theme }) => theme.mono};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.faint};

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.amber};
    }
  }
`;

export default function Contact() {
  return (
    <Wrap id="contact">
      <Glow aria-hidden="true" />
      <Container>
        <Reveal>
          <Eyebrow>contact</Eyebrow>
          <Big>Have a system that needs to be faster?</Big>
          <Sub>
            Open to full-stack, backend, and AI-infrastructure roles. The fastest
            way to reach me is email — I reply like it's a P1.
          </Sub>
          <Actions>
            <Primary href={`mailto:${Bio.email}`}>send an email</Primary>
            <Secondary href={Bio.github} target="_blank" rel="noreferrer">
              github ↗
            </Secondary>
          </Actions>
          <Email>{Bio.email}</Email>
        </Reveal>
        <Footer>
          <FootRow>
            <span>
              {Bio.name} · <a href={Bio.github}>{Bio.handle}</a>
            </span>
            <span>{Bio.tagline}</span>
          </FootRow>
        </Footer>
      </Container>
    </Wrap>
  );
}
