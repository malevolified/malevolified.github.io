import { faInfoCircle, faPaintBrush, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";
import { generatePath, NavLink } from "react-router-dom";
import { GuarianRoutes } from "./GuarianRoutes";
import { RefSection, refSections, smallSections } from "./refSections";

interface IProps {}

export const GuarianTabRef: React.FC<IProps> = ({}) => {
  function renderTab(s: RefSection, small: boolean) {
    return (
      <NavLink
        key={s.route}
        exact={s.exact}
        className={classNames("tab", { small })}
        activeClassName="selected"
        to={generatePath(s.route)}
      >
        {s.icon && <FontAwesomeIcon icon={s.icon} fixedWidth />} {s.title}
      </NavLink>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div className="tab-wrapper">{refSections.map((s) => renderTab(s, false))}</div>
        <div className="tab-wrapper">{smallSections.map((s) => renderTab(s, true))}</div>
      </div>

      <div className="content flat-top">
        <GuarianRoutes />
      </div>
    </div>
  );
};

GuarianTabRef.displayName = "GuarianTabRef";
export default GuarianTabRef;
