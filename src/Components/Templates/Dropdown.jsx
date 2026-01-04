import React from 'react'

function Dropdown({title,option,func}) {
  return (
    <div className='select bg-white w-full sm:w-auto min-w-[150px] sm:min-w-[20em]'>
      <select defaultValue="0" onChange={func} name='format' id='format' className='text-sm sm:text-base'>
        <option value="0" disabled>
           {title}
        </option>
        {option.map((o,i) => 
            <option key={i} value={o}>
                {o.toUpperCase()}
            </option>
        )}
      </select>
    </div>
  )
}

export default Dropdown
