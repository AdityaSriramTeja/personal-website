import React from 'react';

const Card = ({ title, description, app }) => {
    return (
      <div className="relative bg-amber-200 rounded-lg  h-[30rem] w-[30rem]  flex justify-center items-center">
        <h1 className='absolute top-5 right-5'> More </h1>
        <h1 className="text-black text-[1.5rem] font-bold font-mono">
          {title}
        </h1>
        <h1 className="text-black font-medium absolute bottom-[5rem] left-10"> {description} </h1>
        
      </div>
    );
};

export default Card;