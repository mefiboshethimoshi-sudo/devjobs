export interface Company {
  name: string;
  logo?: string;
  website?: string;
}

export interface Job {
  id: number;
  title: string;
  company: Company;
  location: string;
  salary?: string;
  isRemote: boolean;
  postedAt?: string;
}
