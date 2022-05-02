import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://whispering-garden-12680.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [items]);

    return [items, setItems];
}

export default useItems;