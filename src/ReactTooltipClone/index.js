import { useState } from "react";
import "./style.css";
import { HelpSvg } from "./HelpSvg";

export const ReactToolTipClone = () => {
  const [active, setActive] = useState(false);

  const toggleTooltip = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="rtc-root">
        <div
          className="rtc-tooltip-container"
          onMouseEnter={toggleTooltip}
          onMouseLeave={toggleTooltip}
        >
          <div className="rtc-tooltip-icon-container">
            <HelpSvg />
          </div>

          {active && (
            <div className="rtc-tooltip-popup">
              <div className="rtc-tooltip-popup-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  repellendus iure fugit illum nisi cum qui. Ab optio itaque,
                  quae ut dolorem, quibusdam nesciunt et placeat, provident
                  praesentium possimus accusantium.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Itaque ducimus cupiditate odio veniam iusto perspiciatis
                  repellat. Architecto hic, sit molestiae consequuntur
                  temporibus, commodi, iure fuga quo veritatis mollitia ipsam
                  asperiores.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
