import GameCardContainer from './GameCardContainer'
import GameCard from './GameCard'
import { Game } from '../hooks/useGames'
import { ReactNode } from 'react';

interface Props{
	children: ReactNode;
}

const GameFilter = ({children}: Props) => {
  return (
		<>
			{children}
		</>
	)
}

export default GameFilter;