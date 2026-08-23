function Tile(props) {
    // console.log(props);
    const { className, value, onClick, playerTurn } = props;

    let hoverClass = null;
    // make sure tile is null 
    if (value === null && playerTurn !== null) {
        hoverClass = `${playerTurn.toLowerCase()}-hover`;
    };

    return (
        <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>
            {value}
        </div>
    );
}

export default Tile;