export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary?: string;
  isRemote: boolean;
  postedAt?: string;
}
