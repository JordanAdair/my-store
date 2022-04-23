import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
	return (
		<div className="footer-container">
			<p>2022 MyStore™ | Jordan Adair</p>
			<p className="icons">
				<a href="https://www.linkedin.com/in/jordan-adair-2708b7178/">
					<AiFillLinkedin />
				</a>
				<a href="https://github.com/JordanAdair">
					<AiFillGithub />
				</a>
			</p>
		</div>
	);
};

export default Footer;
