import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface CTAButtonProps{
    mainText:string;
}

const CTAButton: React.FC<CTAButtonProps>=({mainText}) => {
  return (
    <>
      <button className="bg-pink-500 hover:bg-pink-600 font-semibold rounded-3xl cursor-pointer uppercase py-3 p-5">{mainText} <FontAwesomeIcon icon={faArrowRight} /></button>
    </>
  )
}

export default CTAButton
