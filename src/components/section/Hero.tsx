import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";
import { Bio, metrics } from "../../data/constants";
import Terminal from "../Terminal";
import { Container } from "../shared";

const Wrap = styled.section`
  position: relative;
  padding: 158px 0 0;
  overflow: hidden;

  @media (max-width: 960px) {
    padding-top: 128px;
  }
`;

/* faint plotting-grid, fading out toward the fold */
const Grid = styled.div`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      ${({ theme }) => theme.line_soft} 1px,
      transparent 1px
    ),
    linear-gradient(90deg, ${({ theme }) => theme.line_soft} 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(
    ellipse 90% 80% at 60% 0%,
    rgba(0, 0, 0, 0.5),
    transparent 70%
  );
  pointer-events: none;
`;

const Glow = styled.div`
  position: absolute;
  top: -180px;
  right: -120px;
  width: 560px;
  height: 560px;
  background: radial-gradient(
    circle,
    rgba(245, 180, 83, 0.09),
    transparent 65%
  );
  pointer-events: none;
`;

const Layout = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 64px;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.mono};
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.amber};
  margin-bottom: 22px;

  span {
    color: ${({ theme }) => theme.dim};
  }
`;

const Name = styled.h1`
  font-family: ${({ theme }) => theme.display};
  font-size: clamp(3rem, 7.5vw, 5.4rem);
  font-weight: 800;
  line-height: 0.98;
  letter-spacing: -0.03em;
  margin-bottom: 26px;

  span {
    color: ${({ theme }) => theme.amber};
  }
`;

const Thesis = styled.p`
  font-family: ${({ theme }) => theme.display};
  font-size: clamp(1.15rem, 2vw, 1.45rem);
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.01em;
  max-width: 30ch;
  margin-bottom: 20px;

  em {
    font-style: normal;
    color: ${({ theme }) => theme.amber};
  }
`;

const Blurb = styled.p`
  color: ${({ theme }) => theme.dim};
  font-size: 0.98rem;
  max-width: 56ch;
  margin-bottom: 36px;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
`;

const Primary = styled.a`
  font-family: ${({ theme }) => theme.mono};
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.bg};
  background: ${({ theme }) => theme.amber};
  border-radius: 8px;
  padding: 13px 24px;
  transition: background 0.15s ease, transform 0.15s ease;

  &:hover {
    background: #ffc76e;
    transform: translateY(-1px);
  }
`;

const Secondary = styled.a`
  font-family: ${({ theme }) => theme.mono};
  font-size: 0.88rem;
  text-decoration: none;
  color: ${({ theme }) => theme.ink};
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 8px;
  padding: 12px 24px;
  transition: border-color 0.15s ease, color 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.amber};
    color: ${({ theme }) => theme.amber};
  }
`;

const TerminalSide = styled.div`
  @media (max-width: 960px) {
    max-width: 560px;
  }
`;

const Strip = styled.div`
  position: relative;
  margin-top: 96px;
  border-top: 1px solid ${({ theme }) => theme.line_soft};
  border-bottom: 1px solid ${({ theme }) => theme.line_soft};

  @media (max-width: 960px) {
    margin-top: 64px;
  }
`;

const StripGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Metric = styled.div`
  padding: 26px 20px;
  border-right: 1px solid ${({ theme }) => theme.line_soft};

  &:last-child {
    border-right: none;
  }

  @media (max-width: 960px) {
    &:nth-child(3n) {
      border-right: none;
    }
    &:nth-child(n + 4) {
      border-top: 1px solid ${({ theme }) => theme.line_soft};
    }
  }

  @media (max-width: 640px) {
    &:nth-child(3n) {
      border-right: 1px solid ${({ theme }) => theme.line_soft};
    }
    &:nth-child(2n) {
      border-right: none;
    }
    &:nth-child(n + 3) {
      border-top: 1px solid ${({ theme }) => theme.line_soft};
    }
  }
`;

const MetricValue = styled.div`
  font-family: ${({ theme }) => theme.mono};
  font-size: clamp(1.15rem, 2vw, 1.5rem);
  font-weight: 600;
  color: ${({ theme }) => theme.ink};
  margin-bottom: 6px;
  white-space: nowrap;
`;

const MetricLabel = styled.div`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.faint};
  line-height: 1.45;
`;

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.6, 0.35, 1] } },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <Wrap id="top">
      <Grid aria-hidden="true" />
      <Glow aria-hidden="true" />
      <Container>
        <Layout>
          <motion.div
            initial={reduce ? false : "hidden"}
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.09 } } }}
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>
                {Bio.role} · {Bio.company}
              </Eyebrow>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Name>
                {Bio.name}
                <span>.</span>
              </Name>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Thesis>
                I build systems that move <em>money</em>, <em>data</em>, and{" "}
                <em>people</em> at scale.
              </Thesis>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Blurb>{Bio.description}</Blurb>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Actions>
                <Primary href={`mailto:${Bio.email}`}>get in touch</Primary>
                <Secondary href={Bio.github} target="_blank" rel="noreferrer">
                  github ↗
                </Secondary>
              </Actions>
            </motion.div>
          </motion.div>

          <TerminalSide>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.21, 0.6, 0.35, 1] }}
            >
              <Terminal />
            </motion.div>
          </TerminalSide>
        </Layout>
      </Container>

      <Strip>
        <Container>
          <StripGrid>
            {metrics.map((m) => (
              <Metric key={m.label}>
                <MetricValue>{m.value}</MetricValue>
                <MetricLabel>{m.label}</MetricLabel>
              </Metric>
            ))}
          </StripGrid>
        </Container>
      </Strip>
    </Wrap>
  );
}
