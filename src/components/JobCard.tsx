import { useState } from 'react';
import { JobCardProps } from '../types';

function JobCard({
  id,
  title,
  company,
  location,
  onSave,
}: JobCardProps) {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  function handleSave() {
    setIsSaved(!isSaved);
    onSave?.(id);
  }

  return (
    <div className="job-card">
      <h2>{title}</h2>

      <p>{company}</p>

      <p>{location}</p>

      <button onClick={handleSave}>
        {isSaved ? '❤️ Saved' : '🤍 Save'}
      </button>
    </div>
  );
}

export default JobCard;
