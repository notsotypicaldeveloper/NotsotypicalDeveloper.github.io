import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./util/Theme";
import Navbar from "./components/Navbar";
import { Hero } from "./components/section/Hero";
import Skills from "./components/section/Skills";
import Experience from "./components/section/Experience";
import Projects from "./components/section/Project";
import Contact from "./components/section/Contact";

const Body = styled.div`
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.ink};
  min-height: 100vh;
  overflow-x: hidden;
`;

const Section = styled.div`
  padding: 110px 0 0;

  @media (max-width: 768px) {
    padding-top: 76px;
  }
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Body>
        <Hero />
        <Section>
          <Experience />
        </Section>
        <Section>
          <Projects />
        </Section>
        <Section>
          <Skills />
        </Section>
        <Section>
          <Contact />
        </Section>
      </Body>
    </ThemeProvider>
  );
}

export default App;
