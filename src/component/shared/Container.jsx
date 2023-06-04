import React from 'react';

const Container = ({children}) => {
    return (
        <div className='mx-w-[2520] mx-auto mx:px-20 xl:px-20 sm:px-2 px-4'>
              {children}
        </div>
    );
};

export default Container;