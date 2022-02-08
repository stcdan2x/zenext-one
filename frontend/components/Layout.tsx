import React from "react";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Header />
			<h2>Page Layout Component</h2>
			{children}
		</div>
	);
};

export default Layout;
