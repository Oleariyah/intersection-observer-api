import React from "react";

export default ({ setRef, visible }) => {
  return (
    <div
      ref={setRef}
      style={{
        height: "100vh",
        backgroundColor: visible ? "#23cebd" : "#efefef"
      }}
    >
      {visible ? (
        <div>
          <h1>Hi! I am on screen</h1>
        </div>
      ) : (
        <div>
          <h1>
            Scroll down 300px from the top of this section{""}
            <span>
              <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
            </span>
          </h1>
        </div>
      )}
    </div>
  );
};
