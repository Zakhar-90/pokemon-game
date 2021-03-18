import {useHistory} from 'react-router-dom';

const GamePage = ({onChangePage}) => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
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
