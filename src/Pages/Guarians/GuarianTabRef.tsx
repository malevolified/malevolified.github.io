import { faInfoCircle, faPaintBrush, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";
import { generatePath, NavLink, Outlet } from "react-router-dom";
import { RefSection, refSections, smallSections } from "./refSections";

interface IProps {}

export const GuarianTabRef: React.FC<IProps> = ({}) => {
  function renderTab(s: RefSection, small: boolean) {
    return (
      <NavLink
        key={s.route}
        className={({ isActive }) => classNames("tab", { small, selected: isActive })}
        to={generatePath(s.route)}
        end
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
        <Outlet />
      </div>
    </div>
  );
};

GuarianTabRef.displayName = "GuarianTabRef";
export default GuarianTabRef;
