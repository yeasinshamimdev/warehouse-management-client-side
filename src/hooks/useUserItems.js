import { useEffect, useState } from "react"

const useUserItems = () => {
    const [userItems, setUserItems] = useState([]);

    useEffect(() => {
        fetch('https://whispering-garden-12680.herokuapp.com/userItems')
            .then(res => res.json())
            .then(data => setUserItems(data));
    }, []);

    return [userItems, setUserItems];
}
export default useUserItems;