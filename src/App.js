import { Container } from "@mui/material";
import "./App.css";
import TagBrowser from "./components/TagBrowser";

function App() {
  return (
    <Container
      maxWidth="xl"
      sx={{ minWidth: "650px", width: { xs: "80%", lg: "70%" }, paddingY: 4 }}
    >
      <TagBrowser />
    </Container>
  );
}

export default App;
