import {Component} from 'react'

import {
  AppContainer,
  ScoreResultContainer,
  OptionContainer,
  Options,
  ScoreContainer,
  ScorePhrase,
  ScoreValue,
  GameViewContainer,
  PopUpContainer,
  GameOptionsList,
  GameResultViewContainer,
  ResultText,
  PlayAgainButton,
} from './StyledComponents'
import ShowRulesView from '../ShowRulesView'
import GameOption from '../GameOption'
import ShowResultingView from '../ShowResultingView'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const gameStatusConstants = {
  inProgress: 'IN_PROGRESS',
  win: 'WIN',
  lose: 'LOSE',
  draw: 'DRAW',
}

class ShowPlayingView extends Component {
  state = {
    gameStatus: gameStatusConstants.inProgress,
    score: 0,
    userChoice: '',
    opponentChoice: '',
  }

  onClickPlayAgain = () => {
    this.setState({gameStatus: gameStatusConstants.inProgress})
  }

  onClickSetUserChoice = id => {
    console.log(id)
    this.setState(
      {userChoice: id, opponentChoice: this.getOpponentChoice()},
      this.evaluateGame,
    )
  }

  getOpponentChoice = () => {
    const opponentChoiceList = choicesList.map(choice => choice.id)
    const randomIndex = Math.floor(Math.random() * 3)
    return opponentChoiceList[randomIndex]
  }

  evaluateGame = () => {
    const {userChoice, opponentChoice} = this.state

    if (userChoice === opponentChoice) {
      this.setState({gameStatus: gameStatusConstants.draw})
    }
    // ROCK section
    else if (userChoice === 'ROCK') {
      if (opponentChoice === 'SCISSORS') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lose,
          score: prevState.score - 1,
        }))
      }
    }
    // SCISSORS section
    else if (userChoice === 'SCISSORS') {
      if (opponentChoice === 'PAPER') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lose,
          score: prevState.score - 1,
        }))
      }
    }
    // PAPER section
    else if (userChoice === 'PAPER') {
      if (opponentChoice === 'ROCK') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lose,
          score: prevState.score - 1,
        }))
      }
    }
  }

  renderGameInProgressView = () => (
    <GameOptionsList>
      {choicesList.map(eachChoice => (
        <GameOption
          key={eachChoice.id}
          optionDetails={eachChoice}
          onClickSetUserChoice={this.onClickSetUserChoice}
        />
      ))}
    </GameOptionsList>
  )

  renderGameDrawView = () => {
    const {userChoice, opponentChoice} = this.state
    const userChoiceObjList = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObj = userChoiceObjList[0]
    const opponentChoiceObjList = choicesList.filter(
      choice => choice.id === opponentChoice,
    )
    const opponentChoiceObj = opponentChoiceObjList[0]
    return (
      <GameResultViewContainer>
        <ShowResultingView
          userChoiceObj={userChoiceObj}
          opponentChoiceObj={opponentChoiceObj}
        />
        <ResultText>IT IS DRAW</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameLostView = () => {
    const {userChoice, opponentChoice} = this.state
    const userChoiceObjList = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObj = userChoiceObjList[0]
    const opponentChoiceObjList = choicesList.filter(
      choice => choice.id === opponentChoice,
    )
    const opponentChoiceObj = opponentChoiceObjList[0]

    return (
      <GameResultViewContainer>
        <ShowResultingView
          userChoiceObj={userChoiceObj}
          opponentChoiceObj={opponentChoiceObj}
        />
        <ResultText>YOU LOSE</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameWonView = () => {
    const {userChoice, opponentChoice} = this.state
    const userChoiceObjList = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObj = userChoiceObjList[0]
    const opponentChoiceObjList = choicesList.filter(
      choice => choice.id === opponentChoice,
    )
    const opponentChoiceObj = opponentChoiceObjList[0]
    return (
      <GameResultViewContainer>
        <ShowResultingView
          userChoiceObj={userChoiceObj}
          opponentChoiceObj={opponentChoiceObj}
        />
        <ResultText>YOU WON</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameView = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameStatusConstants.win:
        return this.renderGameWonView()
      case gameStatusConstants.lose:
        return this.renderGameLostView()
      case gameStatusConstants.draw:
        return this.renderGameDrawView()
      case gameStatusConstants.inProgress:
        return this.renderGameInProgressView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state
    return (
      <AppContainer>
        <ScoreResultContainer>
          <OptionContainer>
            <Options>
              ROCK
              <br />
              <br />
              PAPER
              <br />
              <br />
              SCISSORS
            </Options>
          </OptionContainer>
          <ScoreContainer>
            <ScorePhrase>Score</ScorePhrase>
            <ScoreValue>{score}</ScoreValue>
          </ScoreContainer>
        </ScoreResultContainer>
        <GameViewContainer>{this.renderGameView()}</GameViewContainer>
        <PopUpContainer>
          <ShowRulesView />
        </PopUpContainer>
      </AppContainer>
    )
  }
}

export default ShowPlayingView
