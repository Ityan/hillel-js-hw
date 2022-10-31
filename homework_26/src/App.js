import styled from "styled-components";

import GlobalFonts from './fonts/fonts';
import Button from "./components/Button";
import AlertPopUp from "./components/AlertPopUp";

const HorizontalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding-top: 100px;
`;

const VerticalWrapper = styled(HorizontalWrapper)`
  flex-direction: column;
`;

function App() {
  return (
    <>
      <GlobalFonts />
      <HorizontalWrapper>
        <Button color="primary">Primary button</Button>
        <Button color="primary" size="large">Primary large button</Button>
        <Button color="secondary">Secondary button</Button>
        <Button color="primary" disabled>Disabled button</Button>
      </HorizontalWrapper>
      <VerticalWrapper>
        <AlertPopUp color="primary">Some primary text</AlertPopUp>
        <AlertPopUp color="error">Some error text</AlertPopUp>
        <AlertPopUp color="warning">Some warning text</AlertPopUp>
      </VerticalWrapper>
    </>
  );
}

export default App;
