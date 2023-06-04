import React from 'react';
import Container from '../../component/shared/Container';
import Header from '../../component/Rooms/Header';
import RoomInfo from '../../component/Rooms/RoomInfo';
import DatePicker from '../../component/Rooms/DatePicker';
import RoomReservarion from '../../component/Rooms/RoomReservarion';

const RoomDetails = () => {
    return (
        <Container>
            <div className='max-w-screen-lg mx-auto'>
                <div className='flex flex-col gap-6'>
                    <Header></Header>
                    <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
                        <RoomInfo></RoomInfo>
                        <div className='mb-10 md:col-span-3 order-first md:order-last'><RoomReservarion></RoomReservarion></div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default RoomDetails;