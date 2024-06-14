import WashType from "./WashType"

const WashItem = ({inventory, label, updateInventory: parentInventory}) => {
    function updateInventory(obj) {
        const item = {[label]: {
            ...inventory,
            items: {...inventory.items, ...obj}
        }}
        
        parentInventory(item);
    }

    return (
        <>
        <div className="row">
            <div className="col-3">
                <p>{inventory.label}</p>
            </div>
            {
                Object.keys(inventory.items).map(key => <>
                <WashType inventory={inventory.items[key]} label={key} updateInventory={updateInventory}></WashType>
                </>)
            }
        </div>
        </>
    )
}

export default WashItem