import bad from '../assets/bad.png';
import meduim from '../assets/meduim.png';
import good from '../assets/good.png';
import great from '../assets/great.png';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
    rating: number;
}

const Emoji = ({ rating } : Props) => {
  if(rating < 2) return null;
	const emojiMap: { [key: number] : ImageProps } = {
		2: {src: bad, alt: 'bad'},
		3: {src: meduim, alt: 'meh'},
		4: {src: good, alt: 'recommended'},
		5: {src: great, alt: 'exeptional'},
	}
  return (
		<Image {...emojiMap[rating]} boxSize='25px'/>
	)
}

export default Emoji