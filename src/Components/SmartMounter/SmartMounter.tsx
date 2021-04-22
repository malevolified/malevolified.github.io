//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// Manages hiding and showing content such that it only gets
// mounted when first visible, but doesn't get unmounted when hidden
//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

import React, { useEffect, useState } from "react";

export interface SmartMounterProps {
  visible: boolean;
  style?: React.CSSProperties;
}

const SmartMounter: React.FC<SmartMounterProps> = ({ style, visible, children }) => {
  const [hasMounted, setHasMounted] = useState(visible);

  useEffect(() => {
    if (visible) {
      setHasMounted(true);
    }
  }, [visible]);

  if (!visible && !hasMounted) {
    return <div></div>;
  } else {
    return <div style={{ ...style, display: visible ? undefined : "none" }}>{children}</div>;
  }
};

SmartMounter.displayName = "SmartMounter";
export { SmartMounter };
