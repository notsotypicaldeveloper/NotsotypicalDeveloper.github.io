import styled from "styled-components";
import { projects } from "../../data/constants";
import { Container, SectionHead, Reveal } from "../shared";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg_raised};
  border: 1px solid ${({ theme }) => theme.line_soft};
  border-radius: 12px;
  padding: 24px;
  transition: border-color 0.2s ease, transform 0.2s ease,
    box-shadow 0.2s ease;
  height: 100%;

  &:hover {
    border-color: ${({ theme }) => theme.line};
    transform: translateY(-3px);
    box-shadow: 0 18px 40px -20px rgba(0, 0, 0, 0.8);
  }
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-family: ${({ theme }) => theme.mono};
  font-size: 0.72rem;
  margin-bottom: 16px;
`;

const Category = styled.span`
  color: ${({ theme }) => theme.amber};

  &::before {
    content: "[";
    color: ${({ theme }) => theme.faint};
  }

  &::after {
    content: "]";
    color: ${({ theme }) => theme.faint};
  }
`;

const Year = styled.span`
  color: ${({ theme }) => theme.faint};
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.display};
  font-size: 1.22rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  margin-bottom: 10px;
`;

const Desc = styled.p`
  color: ${({ theme }) => theme.dim};
  font-size: 0.88rem;
  line-height: 1.6;
  margin-bottom: 20px;
  flex: 1;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 20px;
`;

const Tag = styled.span`
  font-family: ${({ theme }) => theme.mono};
  font-size: 0.7rem;
  color: ${({ theme }) => theme.dim};
  background: ${({ theme }) => theme.panel};
  border: 1px solid ${({ theme }) => theme.line_soft};
  border-radius: 5px;
  padding: 3px 8px;
`;

const LinkRow = styled.div`
  display: flex;
  gap: 18px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.line_soft};
`;

const CardLink = styled.a<{ $live?: boolean }>`
  font-family: ${({ theme }) => theme.mono};
  font-size: 0.78rem;
  text-decoration: none;
  color: ${({ theme, $live }) => ($live ? theme.fill : theme.dim)};
  transition: color 0.15s ease;

  &:hover {
    color: ${({ theme, $live }) => ($live ? "#7ff0be" : theme.amber)};
  }
`;

export default function Projects() {
  return (
    <section id="projects">
      <Container>
        <SectionHead eyebrow="projects" title="Built on my own time" />
        <Grid>
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.06}>
              <Card>
                <Meta>
                  <Category>{p.category}</Category>
                  <Year>{p.date}</Year>
                </Meta>
                <Title>{p.title}</Title>
                <Desc>{p.description}</Desc>
                <Tags>
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </Tags>
                <LinkRow>
                  <CardLink href={p.github} target="_blank" rel="noreferrer">
                    source ↗
                  </CardLink>
                  {p.webapp && (
                    <CardLink
                      href={p.webapp}
                      target="_blank"
                      rel="noreferrer"
                      $live
                    >
                      live ↗
                    </CardLink>
                  )}
                </LinkRow>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
