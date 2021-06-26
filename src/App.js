import { ReactToolTip } from "./ReactTooltip";
import { ReactToolTipClone } from "./ReactTooltipClone";
import { CustomTooltip } from "./CustomTooltip";

function App() {
  return (
    <div>
      <ReactToolTipClone />
      <CustomTooltip />
      <ReactToolTip />
    </div>
  );
}

export default App;
