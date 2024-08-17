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

const dataStatistic = [
	{
		id: 1,
		title: "Total User's",
		data: 12,
		icon: "fa-solid fa-users",
	},
	{
		id: 2,
		title: "Active User's",
		data: 5,
		icon: "fa-solid fa-user-check",
	},
	{
		id: 3,
		title: "New User's",
		data: 2,
		icon: "fa-solid fa-user-plus",
	},
	{
		id: 4,
		title: "Inactive User's",
		data: 7,
		icon: "fa-solid fa-user-xmark",
	},
	{
		id: 5,
		title: "User's Logged in",
		data: 10,
		icon: "fa-solid fa-user-clock",
	},
	{
		id: 6,
		title: "Today's Visitor's",
		data: 25,
		icon: "fa-solid fa-user-group",
	},
];

export { logo, signUpIllustration, signInIllustration, patternLines, error404, webName, sidenavMenu, dataStatistic };
