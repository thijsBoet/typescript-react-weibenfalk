// import styled from 'styled-components';

// const Wrapper = styled.div`
//   text-align: center;
// `;
// type Props<ItemType> = {
//   item: ItemType;
//   onClick: (item: ItemType) => void;
// };

// function Item<ItemType>({ item, onClick }: Props<ItemType>) {
//   return (
//     <Wrapper>
//       {Object.keys(item).map((property, index) => {
//         <p key={index}>
//           {property} - {item[property as keyof ItemType]}
//         </p>;
//       })}
//       <button onClick={() => onClick(item)}>Click Me!</button>
//     </Wrapper>
//   );
// }

// export default Item;
