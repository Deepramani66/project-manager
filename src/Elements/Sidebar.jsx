import BubbleMenu from "./BubbleMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuffer } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: "home",
      ariaLabel: "Home",
      rotation: -8,
      hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
      onClick: () => navigate("/"), 
    },
    {
      label: "+Add Project",
      ariaLabel: "Project",
      rotation: 8,
      hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
      onClick: () => navigate("/project"), 
    },
    // you can add more items like this
    // {
    //   label: "blog",
    //   ariaLabel: "Blog",
    //   rotation: 8,
    //   hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
    //   onClick: () => navigate("/blog"),
    // },
  ];

  return (
    <BubbleMenu
      logo={
        <button
          style={{ backgroundColor: "white", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              whiteSpace: "nowrap",
              fontWeight: 540,
              fontSize: "18px",
              color: "#000000",
            }}
          >
            <FontAwesomeIcon icon={faBuffer} />
            Project Management
          </span>
        </button>
      }
      items={items}
      menuAriaLabel="Toggle navigation"
      menuBg="#ffffff"
      menuContentColor="#111111"
      useFixedPosition={false}
      animationEase="back.out(1.5)"
      animationDuration={0.5}
      staggerDelay={0.12}
    />
  );
};

export default Sidebar;
