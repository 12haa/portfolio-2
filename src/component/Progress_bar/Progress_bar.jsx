import React from 'react'
import  './Progress_bar.css'
const Progress_bar = ({number , langs}) => {
 
    return (
    <div className='container   w-[250px]'>
<div className='card  min-h-[80px]  '>
    <div className='percent' style={{"--clr":"#CB69BF","--num":"75"}}>
    <div className='dot'></div>
        <svg>
            <circle cx='70' cy='70' r='70'></circle>
            <circle cx='70' cy='70' r='70'></circle>
        </svg>
        <div className='number'>
            <h2>{number}<span>%</span></h2>
            <p>{langs}</p>
        </div>
    </div>
</div>
    </div>
  )
}

export default Progress_bar