import { useEffect, useState } from "react"

const useSingleItem = itemId => {
    const [singleItem, setSingleItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/products/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleItem(data))
    }, [itemId]);

    return [singleItem, setSingleItem];
}
export default useSingleItem;