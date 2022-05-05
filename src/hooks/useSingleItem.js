import { useEffect, useState } from "react"

const useSingleItem = itemId => {
    const [singleItem, setSingleItem] = useState({});
    useEffect(() => {
        const url = `https://whispering-garden-12680.herokuapp.com/products/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleItem(data))
    }, [itemId, singleItem]);

    return [singleItem, setSingleItem];
}
export default useSingleItem;