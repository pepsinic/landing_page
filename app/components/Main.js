import React from 'react'
import { render } from 'react-dom'

class Header extends React.Component {
	render(){
		return (
			<nav>
				<div>
					<ul>
						<li>
							<a href="#">Home</a>
                    	</li>
					</ul>
				</div>
			</nav>
		)
	}
}

class Main extends React.Component {
	render(){
		return (
			<div>
				<Header />
				<p>Hello world</p>
			</div>
		)
	}
}



render(
	<Main/>, 
	document.getElementById('app')
)