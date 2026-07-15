import styled from "styled-components";
import { skills } from "../../data/constants";
import { Container, SectionHead, Reveal } from "../shared";

const Row = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 32px;
  padding: 26px 0;
  border-top: 1px solid ${({ theme }) => theme.line_soft};

  &:last-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.line_soft};
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 22px 0;
  }
`;

const GroupTitle = styled.h3`
  font-family: ${({ theme }) => theme.mono};
  font-size: 0.82rem;
  font-weight: 500;
  color: ${({ theme }) => theme.amber};
  letter-spacing: 0.04em;
  padding-top: 5px;
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

const Chip = styled.span`
  font-family: ${({ theme }) => theme.mono};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.dim};
  background: ${({ theme }) => theme.bg_raised};
  border: 1px solid ${({ theme }) => theme.line_soft};
  border-radius: 6px;
  padding: 6px 12px;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.ink};
    border-color: ${({ theme }) => theme.line};
  }
`;

export default function Skills() {
  return (
    <section id="stack">
      <Container>
        <SectionHead eyebrow="stack" title="Tools I reach for" />
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.03}>
            <Row>
              <GroupTitle>{group.title}</GroupTitle>
              <Chips>
                {group.skills.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </Chips>
            </Row>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
