const GamePage = ({onChangePage}) => {
    const handleClick = () => {
        onChangePage && onChangePage('app');
    };

    return (
        <>
            <div>
                This is Game Page!!!
            </div>
            <button onClick={handleClick}>
                Home Page
            </button>
        </>
    );
};

export default GamePage;
