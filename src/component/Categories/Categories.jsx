import React from 'react';
import Container from '../shared/Container';
import { categories } from './categotiesData';
import CategoryBox from './CategoryBox';

const Categories = () => {
    return (
        <div>
            <Container>
                <div className='pt-4 flex flex-row justify-between items-center overflow-x-auto'>
                    {
                        categories.map(item => <CategoryBox
                            label={item.label} 
                            icon={item.icon}
                        ></CategoryBox>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Categories;