import logo from "../assets/svg/react.svg";
import signUpIllustration from "../assets/images/signup-illustration.png";
import signInIllustration from "../assets/images/signin-illustration.png";
import patternLines from "../assets/svg/pattern-lines.svg";
import error404 from "../assets/images/error-404.png";

const webName = "Mini Project User Web";

const sidenavMenu = [
	{
		id: 1,
		navRoute: "/home",
		navName: "Home",
		navIcon: "fa-solid fa-house",
	},
	{
		id: 2,
		navRoute: "/user-list",
		navName: "User List",
		navIcon: "fa-solid fa-users",
	},
];

export { logo, signUpIllustration, signInIllustration, patternLines, error404, webName, sidenavMenu };
