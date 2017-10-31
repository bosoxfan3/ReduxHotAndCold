import React from 'react';
import {connect} from 'react-redux';

import {makeGuess} from '../actions';

import './guess-form.css';

export class GuessForm extends React.Component {
    onGuess(event) {
        event.preventDefault();
        const value = this.input.value;
        this.props.dispatch(makeGuess(value));
    }
    //how does the input get cleared anymore?
    //this combines with guess-section. I remember this was the part that messed me up the first
    //time around too

    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                <label htmlFor="userGuess">Enter your Guess</label>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder={Math.round(Math.random() * 100)} required
                    ref={input => this.input = input} />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};
const mapStateToProps = state => ({
    //where do these come from?
    guessCount: state.guesses.length,
    correctAnswer: state.correctAnswer
});
export default connect(mapStateToProps)(GuessForm);

