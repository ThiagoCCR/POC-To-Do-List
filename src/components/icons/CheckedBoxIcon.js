import { IconContext } from "react-icons";
import { IoCheckboxOutline } from "react-icons/io5";

export default function CheckedBoxIcon() {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "global-class-name",
          size: "22px",
        }}
      >
        <div>
          <IoCheckboxOutline />
        </div>
      </IconContext.Provider>
    </>
  );
}
