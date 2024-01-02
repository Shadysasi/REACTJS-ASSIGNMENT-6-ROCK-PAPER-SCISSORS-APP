import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import {
  TriggerButton,
  PopupBody,
  PopupImage,
  CloseButton,
} from './StyledComponents'

const ShowRulesView = () => (
  <Popup
    modal
    trigger={<TriggerButton type="button">Rules</TriggerButton>}
    position="right center"
  >
    {close => (
      <PopupBody>
        <PopupImage
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
        <CloseButton type="button" onClick={() => close()}>
          <RiCloseLine />
        </CloseButton>
      </PopupBody>
    )}
  </Popup>
)
export default ShowRulesView
