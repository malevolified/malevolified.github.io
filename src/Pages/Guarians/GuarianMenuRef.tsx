import React, { useEffect, useRef, useState } from "react";
import Placeholder from "./Tabs/Placeholder";
import "./guarianRef.css";
import refSections, { RefSection } from "./refSections";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { GuarianRoutes } from "./GuarianRoutes";
import { Link, matchPath, useLocation } from "react-router-dom";

interface IProps {}

export const GuarianMenuRef: React.FC<IProps> = ({}) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

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
      <Link to={s.route}>
        <div
          key={index}
          className={"option" + (matchPath(pathname, { path: s.route }) != null ? " selected" : "")}
        >
          {s.title}
        </div>
      </Link>
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
