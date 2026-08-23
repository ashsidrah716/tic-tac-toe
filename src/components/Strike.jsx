function Strike({ strikeClass }) {
    // check which strike applies
    // console.log(strikeClass);

    return (
        <div className={`strike ${strikeClass}`}></div>
    );
}

export default Strike;