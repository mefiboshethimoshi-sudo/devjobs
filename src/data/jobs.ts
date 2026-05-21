import { Job } from "../types";

export const JOBS: Job[] = [
  {
    id: 1,
    title: "Frontend Engineer",
    company: { name: "Stripe", logo: "https://logo.clearbit.com/stripe.com" },
    location: "Remote — US",
    isRemote: true,
    postedAt: "2h ago",
  },
  {
    id: 2,
    title: "React Developer",
    company: { name: "Vercel", logo: "https://logo.clearbit.com/vercel.com" },
    location: "Remote — Global",
    salary: "$110k–$140k",
    isRemote: true,
    postedAt: "5h ago",
  },
  {
    id: 3,
    title: "UI Engineer",
    company: { name: "Airbnb", logo: "https://logo.clearbit.com/airbnb.com" },
    location: "San Francisco, CA",
    salary: "$130k–$160k",
    isRemote: false,
    postedAt: "1d ago",
  },
  {
    id: 4,
    title: "TypeScript Developer",
    company: { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    location: "Remote — US",
    isRemote: true,
    postedAt: "3d ago",
  },
  {
    id: 5,
    title: "Web Developer",
    company: { name: "Shopify", logo: "https://logo.clearbit.com/shopify.com" },
    location: "Ottawa, Canada",
    salary: "$90k–$120k",
    isRemote: false,
    postedAt: "1w ago",
  },
];