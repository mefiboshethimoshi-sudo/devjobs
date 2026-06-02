function JobCard() {
  let viewCount = 0;

  return (
    <div>
      {/* existing card content */}

      <p>Views: {viewCount}</p>

      <button
        onClick={() => {
          viewCount++;
          console.log(viewCount);
        }}
      >
        Track View
      </button>

      {/* 
      WHY UI DOES NOT UPDATE:
      React does not re-render when a regular variable changes because
      React does not track normal JavaScript variables. Although viewCount
      increases in memory and appears in the console, React receives no
      signal to re-render the component, so the screen still shows 0.
      */}
    </div>
  );
}

export default JobCard;
