import React from 'react'

const SecHead = ({heading, title,className,titleCss,bgCss}) => {

  return (
    <div className={`${className} text-[#161A2D]`}>
      <h5
        className={`flex items-center gap-3.75 text-[14px] font-semibold mb-10 ${titleCss}`}
      >
        <span className={`w-1.5 h-1.5 rounded-full bg-primary ${bgCss}`}></span> {title}
      </h5>
      <h2 className=" font-semibold text-[48px]  leading-13 tracking-[-0.96px] ">
    
        {heading}
      </h2>
      
    </div>
  );
}

export default SecHead
