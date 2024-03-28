import { Container } from "@mui/material";
import "./App.css";
import PagedTable from "./components/PagedTable";

function App() {
  return (
    <Container
      maxWidth="xl"
      sx={{ minWidth: "650px", width: { xs: "80%", lg: "70%" }, paddingTop: 4 }}
    >
      <PagedTable />
    </Container>
  );
}

export default App;
