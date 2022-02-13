import styled from "styled-components";

const NavStyles = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	justify-self: end;
	font-size: 2rem;
	a,
	button {
		padding: 1rem 3rem;
		display: flex;
		align-items: center;
		position: relative;
		text-transform: uppercase;
		font-weight: 900;
		font-size: 1em;
		background: none;
		border: 0;
		cursor: pointer;
		@media (max-width: 700px) {
			font-size: 10px;
			padding: 0 10px;
		}
		&:before {
			content: "";
			width: 1px;
			background: var(--mid-gray);

			left: 0;
			position: absolute;

			top: 0;
			bottom: 0;
			right: 0;
		}
		&:after {
			height: 20px;
			background: rgba(250, 250, 250, 0.2);
			content: "";
			width: 0;
			position: absolute;
			//transform: translateX(-50%);
			transition: width 0.4s;
			transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
			//left: 50%;
			margin-top: 0;
			border-radius: 10px;
			z-index: 0;
		}
		&:hover,
		&:focus {
			outline: none;
			text-decoration: none;
			&:after {
				width: calc(100% - 60px);
			}
			@media (max-width: 700px) {
				width: calc(100% - 10px);
			}
		}
	}
	@media (max-width: 1300px) {
		border-top: 3px solid var(--gray);
		border-bottom: 1px solid var(--gray);
		width: 100%;
		justify-content: center;
		font-size: 1.5rem;
	}
`;

export default NavStyles;
