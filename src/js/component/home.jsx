import React from "react";
import Navbar from "./navbar.jsx"; /// ojo esta en gris porque no ha conectado ojo en mayuscula siempre
import Jumbotron from "./jumbotron.jsx"; /// ojo esta en gris porque no ha conectado ojo en mayuscula siempre
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//include images into your bundle

//estructura básica de construcción para impotar locomponentes

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container-fluid">
				<Jumbotron />
				<div className="card-group">
					<Card />
					<Card />
					<Card />
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
