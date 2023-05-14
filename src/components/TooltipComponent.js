import React, { useState } from 'react';

export default function Tooltip({ children, text, ...rest }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      {/* <div className="tooltip">
        {show?text:""}
      </div> */}
      <div
        {...rest}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </div>
  );
}
