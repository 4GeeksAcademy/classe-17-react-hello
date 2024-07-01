import React from "react";

import { NavBar} from "./navbar";
import { Card } from "./card";
import { Jumbotron } from "./jumbotron";
import {Footer} from "./footer";

//create your first component
const Home = () => {
	return (
		<>
		<NavBar />
		<Jumbotron />
		<Card />
		<Footer /> 
		</>

	);
};


export default Home;