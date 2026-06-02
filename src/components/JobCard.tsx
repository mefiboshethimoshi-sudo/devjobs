import { JobCardProps } from '../types';

function JobCard({
  id,
  title,
  company,
  location,
  isSaved,
  onSave,
}: JobCardProps & {
  isSaved: boolean;
  onSave: (id: number) => void;
}) {

  return (
    <div className="job-card">

      <h2>{title}</h2>
      <p>{company}</p>
      <p>{location}</p>

      <button onClick={() => onSave(id)}>
        {isSaved ? '❤️ Saved' : '🤍 Save'}
      </button>

    </div>
  );
}

export default JobCard;
