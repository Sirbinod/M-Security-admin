import React from "react";

const Loading = () => {
  return (
    <div className="text-center">
      <div class="spinner-border text-info" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
