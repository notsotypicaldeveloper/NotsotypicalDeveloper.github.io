import styled from "styled-components";
import { experiences } from "../../data/constants";
import { Container, SectionHead, Reveal } from "../shared";

const Entry = styled.article`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 32px;
  padding: 40px 0;
  border-top: 1px solid ${({ theme }) => theme.line_soft};

  &:last-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.line_soft};
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 32px 0;
  }
`;

const Stamp = styled.div`
  font-family: ${({ theme }) => theme.mono};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.dim};
  line-height: 1.8;

  strong {
    display: block;
    color: ${({ theme }) => theme.amber};
    font-weight: 500;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
`;

const CompanyLink = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: inherit;

  &:hover h3 {
    color: ${({ theme }) => theme.amber};
  }
`;

const Logo = styled.img`
  width: 46px;
  height: 46px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.line};
  background: ${({ theme }) => theme.panel};
  flex-shrink: 0;
`;

const Role = styled.h3`
  font-family: ${({ theme }) => theme.display};
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  margin-bottom: 2px;
  transition: color 0.15s ease;
`;

const CompanyName = styled.p`
  font-family: ${({ theme }) => theme.mono};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.dim};
`;

const Highlights = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  gap: 10px;
  margin-bottom: 20px;
`;

const Highlight = styled.li`
  position: relative;
  padding-left: 22px;
  color: ${({ theme }) => theme.dim};
  font-size: 0.94rem;
  line-height: 1.6;

  &::before {
    content: "▸";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.amber};
  }

  strong {
    color: ${({ theme }) => theme.ink};
    font-weight: 500;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-family: ${({ theme }) => theme.mono};
  font-size: 0.72rem;
  color: ${({ theme }) => theme.dim};
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 5px;
  padding: 4px 9px;
`;

// Bold the measurable outcome in each bullet so a skimmer catches the numbers.
function emphasize(text: string) {
  const pattern =
    /(40%|20%|80%|\(20s → 4s\)|70\+ pilot users|10k\+ concurrent users|25% increase|under 15 minutes|14%|under 400ms|zero)/g;
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default function Experience() {
  return (
    <section id="work">
      <Container>
        <SectionHead eyebrow="work" title="Where I've shipped" />
        {experiences.map((exp, i) => (
          <Reveal key={exp.id} delay={i * 0.04}>
            <Entry>
              <Stamp>
                <strong>{exp.date}</strong>
              </Stamp>
              <div>
                <Header>
                  {(() => {
                    const inner = (
                      <>
                        <Logo
                          src={exp.img}
                          alt={`${exp.company} logo`}
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                        <div>
                          <Role>{exp.role}</Role>
                          <CompanyName>
                            @ {exp.company}
                            {exp.website && " ↗"}
                          </CompanyName>
                        </div>
                      </>
                    );
                    return exp.website ? (
                      <CompanyLink
                        href={exp.website}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${exp.company} website`}
                      >
                        {inner}
                      </CompanyLink>
                    ) : (
                      inner
                    );
                  })()}
                </Header>
                <Highlights>
                  {exp.highlights.map((h) => (
                    <Highlight key={h}>{emphasize(h)}</Highlight>
                  ))}
                </Highlights>
                <Tags>
                  {exp.skills.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </Tags>
              </div>
            </Entry>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
