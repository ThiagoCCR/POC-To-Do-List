import { IconContext } from "react-icons";
import { IoSquareOutline } from "react-icons/io5";

export default function UncheckedBoxIcon() {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "global-class-name",
          size: "22px",
        }}
      >
        <div>
          <IoSquareOutline />
        </div>
      </IconContext.Provider>
    </>
  );
}
