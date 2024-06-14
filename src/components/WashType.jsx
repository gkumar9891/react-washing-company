const WashType = ({inventory:item, label:key, updateInventory}) => {
    
    function changeCounter(num) {
        let obj = {[key]: {...item}};
        obj[key].value = (item.value ?? 0) + num;

        updateInventory(obj);
    }

    return (
        <>
            <div className="col-3">
                <p>{item.label}</p>
                <p>{item.price}</p>
                <div className="counter-wrapper">
                    <button onClick={() => changeCounter(-1)}>-</button>
                    <input type="number" className="" value={item.value ?? 0} />
                    <button onClick={() => changeCounter(+1)}>+</button>
                </div>
            </div>
        </>
    )
}

export default WashType;