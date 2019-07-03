import React from 'react';
//import { Link } from "@reach/router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/**
 * Reach Routers gives us access to a function called getProps.
 * Whatever is returned by getProps(), in this case style,
 * will be applied to the Link attribute as props.
 * So here {...props} will be replaced by style: {}
 *
 * @param props
 * @return {*}
 * @constructor
 */
const NavLink = props => (
	<Link
		{...props}
		getProps={({ isCurrent }) => ( { style: { color: isCurrent ? '#fff' : '#ffffff80' } } )}
		className="nav-link"
	/>
);

export default NavLink;
