import React from 'react';
import useUserItems from '../../../hooks/useUserItems';

const MyItems = () => {
    const [userItems, setUserItems] = useUserItems();

    return (
        <div>
            <h1>this is my items</h1>
        </div>
    );
};

export default MyItems;