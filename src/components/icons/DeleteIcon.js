import { IconContext } from "react-icons";
import { IoTrashOutline } from "react-icons/io5";

export default function DeleteIcon() {
  return (
    <>
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
    </>
  );
}
