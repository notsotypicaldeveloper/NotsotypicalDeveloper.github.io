import styled, {ThemeProvider} from "styled-components";
import {darkTheme} from "./util/Theme";
import Navbar from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
import {Hero} from "./components/section/Hero";

const Body = styled.div`
  background-color: ${({theme})=> theme.bg};
  color: ${({theme}) => theme.text_primary};
  width: 100%;
  height: 90vh;
  overflow-x: hidden;
  position: relative;
`;

function App() {

  return (
    <>
      <ThemeProvider theme={darkTheme} >
        <BrowserRouter>
          <Navbar />
          <Body>
              <Hero />
          </Body>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App