export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
}

export interface JobCardProps extends Job {
  onSave?: (id: number) => void;
}
