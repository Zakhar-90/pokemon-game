import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import PlayerBoard from './component/PlayerBoard';
import PokemonCard from '../../../../components/PokemonCard';
import { PokemonContext } from '../../../../context/pokemonContext';
import s from './style.module.css';

const counterWin = (board, player1, player2) => {
    let player1Count = player1.length;
    let player2Count = player2.length;

    board.forEach(item => {
        if (item.card.possession === 'red') {
            player2Count++;
        }
        
        if (item.card.possession === 'blue') {
            player1Count++;
        }
    });

    return [player1Count, player2Count];
}

const BoardPage = () => {
    const { pokemons, setCardPlayer, setWin } = useContext(PokemonContext);

    const [board, setBoard] = useState([]);
    const [player1, setPlayer1] = useState(() => {
        return Object.values(pokemons).map(item => ({
            ...item,
            possession: 'blue'
        }))
    });
    const [player2, setPlayer2] = useState([]);
    const [choiceCard, setChoiceCard] = useState(null);
    const [steps, setSteps] = useState(0);
    const [turnPlayer, setTurnPlayer] = useState(() => {
        return Math.floor(Math.random()) + 1;
    });

    const history = useHistory();

    useEffect(async () => {
        const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const boardRequest = await boardResponse.json();

        setBoard(boardRequest.data);

        const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const player2Request = await player2Response.json();

        setPlayer2(() => {
            return player2Request.data.map(item => ({
                ...item,
                possession: 'red'
            }))
        });

        setCardPlayer(player2Request.data);
    }, []);

    if (Object.keys(pokemons).length === 0) {
        history.replace('/game');
    }

    const handleClickBoardPlate = async (position) => {
        if (choiceCard) {
            const params = {
                position,
                card: choiceCard,
                board
            };

            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            const request = await res.json();

            if (choiceCard.player === 1) {
                setPlayer1(prevState => prevState.filter(item => item.id !== choiceCard.id));
            }
            
            if (choiceCard.player === 2) {
                setPlayer2(prevState => prevState.filter(item => item.id !== choiceCard.id));
            }

            setBoard(request.data);
            setSteps(prevState => {
                const count = prevState + 1;
                return count;
            })
        }
    }

    useEffect(() => {
        if (steps === 9) {
            const [count1, count2] = counterWin(board, player1, player2);

            if (count1 > count2) {
                setWin("WIN");
                alert("WIN");
            } else if (count1 < count2) {
                setWin("LOSE");
                alert("LOSE");
            } else {
                setWin("DRAW");
                alert("DRAW");
            }

            history.push('/game/finish');
        }
    }, [steps]);

    //alert(`Starting game: player${turnPlayer}`);

    return (
        <div className={s.root}>
            <div className={s.turnPlayer}>Player <b>{turnPlayer}</b> turn</div>
            <div className={s.playerOne}>
                <PlayerBoard
                    player={1}
                    cards={player1}
                    onClickCard={(card) => setChoiceCard(card)}
                    turnPlayer={turnPlayer}
                />
            </div>
            <div className={s.board}>
                {
                    board.map( item => (
                        <div
                            key={item.position}
                            className={s.boardPlate}
                            onClick={() => {
                                !item.card && handleClickBoardPlate(item.position);
                                setTurnPlayer(turnPlayer === 1 ? 2 : 1);
                            }}
                        >
                            {
                                item.card && <PokemonCard {...item.card} isActive minimize />
                            }
                        </div>
                    ))
                }
            </div>
            <div className={s.playerTwo}>
                <PlayerBoard
                    player={2}
                    cards={player2}
                    onClickCard={(card) => setChoiceCard(card)}
                    turnPlayer={turnPlayer}
                />
            </div>
        </div>
    );
};

export default BoardPage;
