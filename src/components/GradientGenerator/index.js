import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  GradientGeneratorContainer,
  CustomHeading,
  CustomPara,
  DirectionListContainer,
  InputColorsContainer,
  CustomInputContainer,
  CustomSpan,
  CustomInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    firstColorInput: '#8ae323',
    secondColorInput: '#014f7b',
    activeDirection: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  changeFirstColor = event => {
    this.setState({firstColorInput: event.target.value})
  }

  changeSecondColor = event => {
    this.setState({secondColorInput: event.target.value})
  }

  changeGradientDirection = directionValue => {
    this.setState({activeDirection: directionValue})
  }

  onClickGenerate = () => {
    const {firstColorInput, secondColorInput, activeDirection} = this.state
    this.setState({
      gradientValue: `to ${activeDirection}, ${firstColorInput}, ${secondColorInput}`,
    })
  }

  render() {
    const {
      firstColorInput,
      secondColorInput,
      activeDirection,
      gradientValue,
    } = this.state

    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <GradientGeneratorContainer>
          <CustomHeading>Generate a CSS Color Gradient</CustomHeading>
          <CustomPara>Choose Direction</CustomPara>
          <DirectionListContainer>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                directionDetails={eachDirection}
                changeGradientDirection={this.changeGradientDirection}
                isActive={activeDirection === eachDirection.value}
              />
            ))}
          </DirectionListContainer>
          <CustomPara>Pick the Colors</CustomPara>
          <InputColorsContainer>
            <CustomInputContainer>
              <CustomSpan>{firstColorInput}</CustomSpan>
              <CustomInput
                type="color"
                value={firstColorInput}
                onChange={this.changeFirstColor}
              />
            </CustomInputContainer>
            <CustomInputContainer>
              <CustomSpan>{secondColorInput}</CustomSpan>
              <CustomInput
                type="color"
                value={secondColorInput}
                onChange={this.changeSecondColor}
              />
            </CustomInputContainer>
          </InputColorsContainer>
          <GenerateButton type="button" onClick={this.onClickGenerate}>
            Generate
          </GenerateButton>
        </GradientGeneratorContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
