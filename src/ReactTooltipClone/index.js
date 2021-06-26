import "./style.css";

export const ReactToolTipClone = () => {
  return (
    <>
      <div className="rtc-root">
        <div className="rtc-container">
          <div className="rtc-tooltip-icon">
            <div>?</div>
          </div>

          <div className="rtc-tooltip-body rtc-tooltip-show">
            <div className="rtc-tooltip-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                repellendus iure fugit illum nisi cum qui. Ab optio itaque, quae
                ut dolorem, quibusdam nesciunt et placeat, provident praesentium
                possimus accusantium.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                ducimus cupiditate odio veniam iusto perspiciatis repellat.
                Architecto hic, sit molestiae consequuntur temporibus, commodi,
                iure fuga quo veritatis mollitia ipsam asperiores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
