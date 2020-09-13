import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

export const ClickOut = (props) => {
  
  const wrapperRef = useRef(null);
  
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        // alert("You clicked outside of me!");
        props.props('none');
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, props]);

  return <div ref={wrapperRef}>{props.children}</div>;
};

ClickOut.propTypes = {
  children: PropTypes.element.isRequired
};