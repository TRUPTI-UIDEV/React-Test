import React, { useState, useEffect, memo } from 'react';
import { Car } from './component';

const LAUNCHES_QUERY = `
{
	launchesPast(limit:10){
		id
		mission_name
	}
}
`


function Carlist() {
	const [dummycarname, setDumycarname] = useState([])

	useEffect(() => {
		fetch('https://api.spacex.land/graphql/', {
			method: "POST",
			headers:{"Content-type": "application/json"},
			body: JSON.stringify({query:LAUNCHES_QUERY})
		}).then(response => response.json())
		.then(data => setDumycarname(data.data.launchesPast))
		
  }, []);

if (!dummycarname) {
    return "loading...";
  }

  return (
	<React.Fragment>
		<h1>Car List</h1>
		{/* mapping the dummy content to show in car component , image name given as direct because don't have car image dynamic api */}
		<ul className='carcontainer'>
			{dummycarname.map(launch => (
				<Car img='https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/45849/tigor-ev-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=75' alt={launch.mission_name} title={launch.mission_name} key={launch.id} carname={launch.mission_name} price={Math.random()} />
			))}
		</ul>
	</React.Fragment>
  )
}
export default Carlist;

