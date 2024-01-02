import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ScoreResultContainer = styled.div`
  height: 20vh;
  width: 65%;
  padding: 15px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`
export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Options = styled.h1`
  font-family: 'Bree Serif';
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  padding-left: 30px;
  padding-right: 30px;
`
export const ScorePhrase = styled.p`
  font-family: 'Bree Serif';
  font-size: 18px;
  font-weight: 700;
  color: #223a5f;
  margin: 0;
`
export const ScoreValue = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 700;
  color: #223a5f;
  margin: 10px 10px;
`
export const GameViewContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PopUpContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`
export const GameOptionsList = styled.ul`
  padding-left: 0px;
  margin-left: 0px;
  max-width: 480px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`
export const GameResultViewContainer = styled.div`
  max-width: 560px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ResultText = styled.p`
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #ffffff;
  text-align: center;
`
export const PlayAgainButton = styled.button`
  font-size: 16px;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-weight: 700;
  border-radius: 4px;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  outline: none;
  align-self: center;
`
