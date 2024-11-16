import React from 'react';

const Feedback = ({ feedback }) => {

    const {name, review, userImg} = feedback;

    return (
        <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <div className='flex items-center gap-2'>
            <img className='w-16 h-16 object-cover rounded-full' src={userImg} alt="" />
            <h2 className='card-title'>{name}</h2>
          </div>
          <p>{review}</p>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Feedback;