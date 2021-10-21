// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
`
export const GradientGeneratorContainer = styled.div`
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const CustomHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 46px;
  font-weight: bold;
  color: #ffffff;
  @media screen and (max-width: 767px) {
    font-size: 32px;
  }
  text-align: center;
`
export const CustomPara = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  color: #ffffff;
  font-weight: normal;
  @media screen and (max-width: 767px) {
    font-size: 26px;
  }
`
export const DirectionListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`
export const InputColorsContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 40%;
    max-width: 550px;
  }
`
export const CustomInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 25px;
  margin-bottom: 25px;
`
export const CustomSpan = styled.p`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 25px;
`
export const CustomInput = styled.input`
  height: 50px;
  width: 100px;
  border: 2px solid #334155;
  outline: 0px;
`
export const GenerateButton = styled.button`
  height: 45px;
  width: 150px;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: #00c9b7;
  border-radius: 12px;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 600;
  margin-top: 25px;
  margin-bottom: 35px;
`
