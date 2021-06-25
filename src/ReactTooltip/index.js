import ReactTooltip from "react-tooltip";
import "./style.css";
import { isMobile } from "../utils/UAParser";

export const ReactToolTip = () => {
  console.log(isMobile());
  return (
    <div className="tooltip-container">
      <button data-tip data-for="helpTip" data-event="click focus">
        Register
      </button>

      <ReactTooltip
        id="helpTip"
        place="bottom"
        effect="solid"
        clickable
        border
        borderColor="green"
        textColor="black"
        backgroundColor="white"
        className="helpTip"
        globalEventOff="click"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          repellendus iure fugit illum nisi cum qui. Ab optio itaque, quae ut
          dolorem, quibusdam nesciunt et placeat, provident praesentium possimus
          accusantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          ducimus cupiditate odio veniam iusto perspiciatis repellat. Architecto
          hic, sit molestiae consequuntur temporibus, commodi, iure fuga quo
          veritatis mollitia ipsam asperiores.
        </p>
      </ReactTooltip>
    </div>
  );
};
