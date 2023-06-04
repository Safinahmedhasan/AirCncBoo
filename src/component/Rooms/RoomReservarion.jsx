import React from 'react';
import DatePicker from './DatePicker';
import Button from '../Button/Button';

const RoomReservarion = () => {
    return (
        <div className='bg-white rounded-xl border-[1x] border-neutral-200 overflow-hidden'>
            <div className='flex flex-row items-center gap-1 p-4'>
                <div className='text-2xl font-semibold'>$ 200</div>
                <div className='font-light text-neutral-600'>night</div>
            </div>
            <hr></hr>
            <DatePicker></DatePicker>
            <h1></h1>
            <div className="p-4">
                <Button label='Reserve'></Button>
            </div>
            <hr />
            <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
                <div>Total</div>
                <div>$ 300</div>
            </div>
        </div>
    );
};

export default RoomReservarion;