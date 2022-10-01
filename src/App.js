import logo from "./logo.svg";
import "./App.css";
import { PrivateLayout, PublicLayout } from "./layouts";
function App() {
  const isAuthenticated = true;
  return (
    <div className="App">
      {isAuthenticated ? <PrivateLayout /> : <PublicLayout />}
    </div>
  );
}
export default App;
