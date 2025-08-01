import React from 'react'

interface HeadlineProps {
    mainText:string;
    subText:string;
}

const HeadLineComponent: React.FC<HeadlineProps> = ({mainText, subText}) => {
  return (
    <h1 className="text-[44px] text-center font-semibold tracking-wide bg-gradient-to-r from-[#873AE3] via-[#EF4476] to-[#F57C3C] bg-clip-text text-transparent leading-tight">
      <span className="text-white">{mainText}</span> {subText}
    </h1>
  )
}

export default HeadLineComponent