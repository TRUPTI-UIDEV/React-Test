import React from 'react';
import './style.css';


function Car(props) {
	return (
		// reusable car component
		// passing all data from parent to child using props
		<React.Fragment>
			<li className="wrapper">
				<div className="imgcontainer">
					<img src={props.img} title={props.title} alt={props.alt} />
				</div>
				<div className="cardetails">
					<div className="carname">
						{props.carname}
					</div>
					<div className="carprice">
						₹ {props.price} Lakh	
					</div>
				</div>
			</li>
		</React.Fragment>
	);
}

export default Car;
