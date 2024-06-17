import chest from "../assets/chest.png";
import { FiMenu } from "react-icons/fi";

function NavBar() {
  return (
    <div
      style={{
        backgroundColor: "#171a21",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <div
        style={{
          position: "fixed",
          left: "8px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <FiMenu style={{ marginRight: "10px", fontSize: "30px" }} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <img
          src={chest}
          alt="Chest"
          style={{
            height: "70px",
            marginRight: "20px",
            marginLeft: "20px",
          }}
        />
        <h1 style={{ fontSize: "20px", fontWeight: "bold", margin: 0 }}>
          The Grove
        </h1>
      </div>
    </div>
  );
}

export default NavBar;
