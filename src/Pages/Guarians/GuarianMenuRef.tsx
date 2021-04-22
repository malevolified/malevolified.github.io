import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { generatePath, NavLink } from "react-router-dom";
import "./guarianRef.css";
import { GuarianRoutes } from "./GuarianRoutes";
import refSections, { RefSection } from "./refSections";

interface IProps {}

export const GuarianMenuRef: React.FC<IProps> = ({}) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    var listener = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuVisible(false);
      }
    };
    document.addEventListener("mousedown", listener);

    return () => document.removeEventListener("mousedown", listener);
  }, []);

  function renderOption(s: RefSection, index: number) {
    return (
      <NavLink
        key={s.route}
        exact={s.exact}
        to={generatePath(s.route)}
        className="option"
        activeClassName="selected"
        onClick={() => setMenuVisible(false)}
      >
        {s.title}
      </NavLink>
    );
  }

  return (
    <div>
      <div className="menu-opener menu-clickable" onClick={(e) => setMenuVisible(true)}>
        <FontAwesomeIcon icon={faBars} size="2x" fixedWidth />
      </div>
      <div
        ref={menuRef}
        className="overlay-menu"
        style={isMenuVisible ? { width: 200, borderRight: "3px solid #eee" } : { width: 0 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            className="menu-clickable"
            style={{ marginBottom: 20 }}
            onClick={() => setMenuVisible(false)}
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </div>
        </div>
        {refSections.map(renderOption)}
      </div>
      <div className="content">
        <GuarianRoutes />
      </div>
    </div>
  );
};

GuarianMenuRef.displayName = "GuarianMenuRef";
export default GuarianMenuRef;
