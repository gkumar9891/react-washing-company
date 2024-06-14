import WashItem from "./WashItem";

const MenWash = ({inventory, label, updateInventory: updateParent}) => {
    function updateInventory(obj) {
        const item = {[label]: {
            ...inventory,
            items: {...inventory.items, ...obj}
        }}
        
        updateParent(item);
    }

    return (
        <>
        {
            Object.keys(inventory.items)
            .map(key => <>
            <WashItem inventory={inventory.items[key]} label={key} updateInventory={updateInventory}></WashItem>
            </>)
        }
        </>
    )
}

export default MenWash;