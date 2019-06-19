import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getChars } from "../actions";

class CharacterListView extends React.Component {
	componentDidMount() {
		// call our action
		this.props.getChars("https://swapi.co/api/people");
	}

	render() {
		console.log(this.props);
		if (this.props.fetching) {
			// return something here to indicate that you are fetching data
			return <div>Retrieving Characters...</div>;
		}
		return (
			<div className="CharactersList_wrapper">
				<CharacterList characters={this.props.characters} />
				<button onClick={() => this.props.getChars(this.props.previous)}>
					Previous
				</button>
				<button onClick={() => this.props.getChars(this.props.next)}>
					Next
				</button>
			</div>
		);
	}
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStatetoProps = state => {
	return {
		characters: state.charsReducer.characters,
		error: state.charsReducer.error,
		fetching: state.charsReducer.fetching,
		next: state.charsReducer.next,
		previous: state.charsReducer.previous
	};
};

export default connect(
	mapStatetoProps /* mapStateToProps replaces null here */,
	{
		/* action creators go here */ getChars
	}
)(CharacterListView);
