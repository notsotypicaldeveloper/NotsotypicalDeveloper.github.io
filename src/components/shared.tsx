import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export const Container = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 28px;

  @media (max-width: 640px) {
    padding: 0 20px;
  }
`;

const Head = styled.header`
  margin-bottom: 56px;

  @media (max-width: 640px) {
    margin-bottom: 36px;
  }
`;

const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.mono};
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.amber};
  margin-bottom: 14px;

  &::before {
    content: "~/";
    color: ${({ theme }) => theme.faint};
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.display};
  font-size: clamp(1.9rem, 3.6vw, 2.7rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
`;

export function SectionHead({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <Head>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Title>{title}</Title>
    </Head>
  );
}

export function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.6, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}
