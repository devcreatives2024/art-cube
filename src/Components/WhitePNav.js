import React from "react";

const WhitePNav = () => {
  return (
    <div className="p-5 bg-[#181C1F] border-b border-[#374151] w-full flex">
      <div className="flex justify-start">
        <div className="w-72 border-r border-[#374151]">
          <img
            src="https://www.gitbook.com/cdn-cgi/image/height=40,fit=contain,dpr=1,format=auto/https%3A%2F%2F2958952834-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FTzN1bJCbdGHZpshXjW2O%252Flogo%252FsnXtiN5iR4QjiBqjjWOe%252FwhiteLogo.png%3Falt%3Dmedia%26token%3D1127fb75-c945-4cc6-a338-03cffd98dd8a"
            className="w-40"
            alt=""
          />
        </div>
      </div>
      <div className="w-full"></div>
      <div className="flex text-[#CFD0D0] items-center gap-1 w-60 pl-4 border-l border-[#374151]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          data-rnw-int-class="nearest___379-2689_"
          class="r-h7gdob"
          style={{
            height: "14px",
            verticalAlign: "middle",
            width: "14px",
          }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.5 4a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10.5a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0z"
            fill="currentColor"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.093 15.093a1 1 0 011.414 0l5.2 5.2a1 1 0 01-1.414 1.414l-5.2-5.2a1 1 0 010-1.414z"
            fill="currentColor"
          ></path>
        </svg>
        <p className="text-sm">Search...</p>
      </div>
    </div>
  );
};

export default WhitePNav;
