// Write your code here
import {DirectionItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, changeGradientDirection, isActive} = props
  const {displayText, value} = directionDetails
  const onClickDirectionChange = () => {
    changeGradientDirection(value)
  }
  return (
    <DirectionItem onClick={onClickDirectionChange}>
      <DirectionButton isActive={isActive}>{displayText}</DirectionButton>
    </DirectionItem>
  )
}

export default GradientDirectionItem
