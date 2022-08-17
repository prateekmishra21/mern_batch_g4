//
//
//

import React from "react";

const Counts = () => {
  var count = 0;
  return (
    <div>
      <p>You Clicked {count} times</p>
      <button
        onClick={() => {
          count += 1;
          console.log(count);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Counts;
