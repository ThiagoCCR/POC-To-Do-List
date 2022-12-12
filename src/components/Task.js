import styled from "styled-components";
import { IoTrashOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useState } from "react";
import UncheckedBoxIcon from "./icons/UncheckedBoxIcon";
import CheckedBoxIcon from "./icons/CheckedBoxIcon";

function Task({ text, onDelete }) {
  const [selected, setSelected] = useState(false);

  const handleDelete = () => {
    if (onDelete) {
      onDelete(text);
    }
  };

  const handleClick = () => setSelected((prevState) => !prevState);

  return (
    <Wrapper>
      <CheckAndTextContainer selected={selected} onClick={handleClick}>
        <div>{selected ? <CheckedBoxIcon /> : <UncheckedBoxIcon />}</div>
        {text}
      </CheckAndTextContainer>
      <div onClick={handleDelete} data-testid={`deleteButton_${text}`}>
        <IconContext.Provider
          value={{
            className: "global-class-name",
            size: "22px",
          }}
        >
          <div>
            <IoTrashOutline />
          </div>
        </IconContext.Provider>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 40px;
  width: 100%;
  background-color: #fcf6ea;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 1px 0 1px 0;
  padding: 0 10px 0 10px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const CheckAndTextContainer = styled.div`
  display: flex;
  column-gap: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  font-family: "PT Sans Narrow", sans-serif;
  line-height: 100px;
  color: black;
  text-decoration: ${({ selected }) => (selected ? "line-through" : "none")};
  > div {
    padding-top: 10px;
  }
`;

export default Task;
