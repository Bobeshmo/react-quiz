import React from 'react'
import classes from './FinishedQuiz.css'
import Button from '../UI/Button/Button';
import {Link} from 'react-router-dom'

class FinishedQuiz extends React.Component {
    constructor (props) {
        super(props);
        this.mySpan = document.getElementsByTagName("span");
        this.successCount = Object.keys(props.results).reduce((total, key) => {
            if(props.results[key] === 'success') {
                total++;
            }
            console.log(key);
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
                    <Button onClick={this.props.onRetry} type='primary'>Повторить</Button>
                    <Link to={'/'}>
                        <Button type='success'>Перейти в список тестов</Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default FinishedQuiz
