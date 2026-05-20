import { Header, JobList } from "./components";

const JOBS = [
  {
    id: 1,
    title: "Senior Frontend Dev",
    company: "TechCorp",
    location: "Nairobi",
    isRemote: true,
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataHub",
    location: "Dar es Salaam",
    isRemote: true,
  },
  {
    id: 3,
    title: "DevOps Specialist",
    company: "CloudBase",
    location: "Mombasa",
    isRemote: false,
  },
];

export default function App() {
  return (
    <>
      <Header />
      <JobList jobs={JOBS} />
    </>
  );
}
