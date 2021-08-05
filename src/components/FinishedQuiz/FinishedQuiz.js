import React from 'react'
import classes from './FinishedQuiz.css'

class FinishedQuiz extends React.Component {
    constructor (props) {
        super(props);
        this.mySpan = document.getElementsByTagName("span");
        this.successCount = Object.keys(props.results).reduce((total, key) => {
            if(props.results[key] === 'success') {
                total++;
            }

            return total;
        }, 0)
    }

    render () {
        return (
            <div className={classes.FinishedQuiz}>
                <ul>
                    {this.props.quiz.map((quizItem, index) => {
                        return (
                            <li key={index}>
                                <strong>{index + 1}</strong>.&nbsp;
                                {quizItem.question}
                                <span className={classes[this.props.results[quizItem.id]]}>
                                    {
                                        this.props.results[quizItem.id] === 'error'
                                        ? this.mySpan.innerHTML = '×'
                                        : this.mySpan.innerHTML = '√'
                                    }
                                </span>
                            </li>
                        )

                    })}
                </ul>

                <p>Правильно {this.successCount} из {this.props.quiz.length}</p>

                <div>
                    <button onClick={this.props.onRetry}>Повторить</button>
                </div>
            </div>
        )
    }
}

export default FinishedQuiz
