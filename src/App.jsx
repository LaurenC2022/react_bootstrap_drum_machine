import { createRoot } from "react-dom/client";
import Previewer from "./Previewer";
import EditorView from "./EditorView";
import "./style.scss";
import * as bootstrap from "bootstrap";

const App = () => {
  return (
    <div>
      <header>
        <h1>Hello world from App!</h1>
      </header>
      <EditorView />
      <Previewer />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
