import React, { useEffect } from 'react'

import { connect } from 'react-redux'

import { getCat } from './../actions'

import './../App.css'

function Cat(props) {

	// console.log(props.cats[0].catURL)
	// console.log(props.cats)
	// console.log(props.cats.map(cat => console.log('This is an iteration')))
	// console.log(props.cats.map(cat => console.log(cat.catURL)))

	// const { cat } = props;

	// useEffect(() => {
	// 	props.dispatch(getCat())
	// }, [handleClick])

	const handleClick = () => {
		props.dispatch(getCat())
	}

	return(
		<div class='cat'>
			<h1>Here is the Featured Cat</h1>
			<img src={props.cat} alt='cat'/>
			<br/>
			<button onClick={handleClick}>Feature Another Cat!</button>
		</div>
	)
}

const mapStateToProps = state => {
	return{
		cat: state.cat
	}
}

export default connect(mapStateToProps)(Cat)