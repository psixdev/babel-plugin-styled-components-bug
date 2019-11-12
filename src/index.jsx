const React = require('react');
const ReactDOM = require('react-dom');
const FirstSC = require('./FirstSC');
const SecondSC = require('./SecondSC');

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render((
		<>
			<FirstSC>first sc</FirstSC>
			<SecondSC>second sc</SecondSC>
		</>
	), document.querySelector('#root'));
});
