import styled from "styled-components";

import Button from "./components/Button";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

function App() {
  return (
    <Wrapper>
      <Button color="primary">Primary button</Button>
      <Button color="primary" size="large">Primary large button</Button>
      <Button color="secondary">Secondary button</Button>
      <Button color="primary" disabled>Disabled button</Button>
    </Wrapper>
  );
}

export default App;
