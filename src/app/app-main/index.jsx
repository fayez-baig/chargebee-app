import { Route, BrowserRouter } from "react-router-dom";
import { LayoutContainer } from "../domians/Layout/containers/index";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={LayoutContainer} />
    </BrowserRouter>
  );
}

export default App;
