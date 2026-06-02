import { useState } from 'react';

function JobCard() {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  return (
    <div>
      {/* existing card content */}

      <button onClick={() => setIsSaved(!isSaved)}>
        {isSaved ? '❤️ Saved' : '🤍 Save'}
      </button>
    </div>
  );
}

export default JobCard;
