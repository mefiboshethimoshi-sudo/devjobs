import "./App.css";
import JobList from "./components/JobList";
import { JOBS } from "./data/jobs";

function App(): JSX.Element {
  return (
    <div className="App">
      <JobList jobs={JOBS} />
    </div>
  );
}

export default App;
