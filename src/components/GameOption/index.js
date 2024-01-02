import {
  GameOptionListItem,
  GameOptionButton,
  GameOptionImage,
} from './StyledComponents'

const GameOption = props => {
  const {optionDetails, onClickSetUserChoice} = props
  const {imageUrl, id} = optionDetails

  const userChoice = () => {
    onClickSetUserChoice(id)
  }

  return (
    <GameOptionListItem>
      <GameOptionButton
        type="button"
        onClick={userChoice}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <GameOptionImage src={imageUrl} alt={id} />
      </GameOptionButton>
    </GameOptionListItem>
  )
}
export default GameOption
