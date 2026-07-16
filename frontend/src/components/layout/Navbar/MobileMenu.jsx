import styles from "./Navbar.module.css";

const MobileMenu = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "red",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "32px",
      }}
    >
      MOBILE MENU WORKING
    </div>
  );
};

export default MobileMenu;