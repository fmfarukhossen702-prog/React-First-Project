import React from 'react'

const SecHead = ({heading, title}) => {
  return (
    <div>
      <h5 className="flex items-center gap-3.75 text-[14px] font-semibold mb-10">
        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {title}
      </h5>
      <h2 className=" font-semibold text-[48px] text-[#161A2D] leading-13 tracking-[-0.96px] "> { heading} </h2>
    </div>
  );
}

export default SecHead
