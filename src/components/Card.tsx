import React from 'react';

// Styles
import { StyledGender, Wrapper } from './Card.styles';

type Props = {
  name: string;
  imgUrl: string;
  gender: string;
  // children?: React.ReactNode;
};

const Card = ({ name, imgUrl, gender }: Props) => (
  <Wrapper>
    <p>{name}</p>
    <img src={imgUrl} alt="character-thumb" />
    <StyledGender color="green" gender={gender} />
  </Wrapper>
);

// const Card: React.FC<Props> = ({ name, imgUrl }) => (
//   <Wrapper>
//     <p>{name}</p>
//     <p>{imgUrl}</p>
//   </Wrapper>
// );

export default Card;
