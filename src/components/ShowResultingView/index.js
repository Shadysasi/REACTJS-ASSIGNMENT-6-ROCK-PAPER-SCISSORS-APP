import {
  SelectOptionContainer,
  GameUserOptionContainer,
  GameParticipantText,
  GameParticipantSelectImage,
} from './StyledComponents'

const ShowResultingView = props => {
  const {userChoiceObj, opponentChoiceObj} = props

  return (
    <SelectOptionContainer>
      <GameUserOptionContainer>
        <GameParticipantText>YOU</GameParticipantText>
        <GameParticipantSelectImage
          src={userChoiceObj.imageUrl}
          alt="your choice"
        />
      </GameUserOptionContainer>
      <GameUserOptionContainer>
        <GameParticipantText>OPPONENT</GameParticipantText>
        <GameParticipantSelectImage
          src={opponentChoiceObj.imageUrl}
          alt="opponent choice"
        />
      </GameUserOptionContainer>
    </SelectOptionContainer>
  )
}

export default ShowResultingView
