import { useDispatch, useSelector } from "react-redux";
import { selectModalItems, toggleModal } from "../../apiProducts/productsSlice";
import { ModalContainer, Item, Button } from "./styled";

export const Modal = () => {
  const modalItems = useSelector(selectModalItems);
  const dispatch = useDispatch();

  return (
    <>
      {modalItems.map(({ id, name, year, color, pantone_value }) => (
        <ModalContainer key={id} color={color}>
          <Button onClick={() => dispatch(toggleModal())}>Go back</Button>
          <Item>ID: {id}</Item>
          <Item>Name: {name}</Item>
          <Item>Year: {year}</Item>
          <Item>Color: {color}</Item>
          <Item>Pantone value: {pantone_value}</Item>
        </ModalContainer>
      ))}
    </>
  );
};
