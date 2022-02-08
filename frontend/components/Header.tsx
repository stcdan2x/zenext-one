import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import styled from "styled-components";

const Logo = styled.h1`
	color: purple;
	cursor: pointer;

	:hover {
		color: green;
	}
`;

const HeaderStyles = styled.header`
	.bar {
		border-bottom: 10px solid var(--black, black);
		display: grid;
		grid-template-columns: auto 1fr;
		justify-content: space-between;
		align-items: center;
	}
`;

const Header = () => {
	return (
		<header>
			<div className="bar">
				<Link href="/">
					<Logo>ZeNexT One</Logo>
				</Link>{" "}
			</div>
			<div className="sub-bar">
				<p>Search</p>
			</div>
			<Nav />
		</header>
	);
};

export default Header;
