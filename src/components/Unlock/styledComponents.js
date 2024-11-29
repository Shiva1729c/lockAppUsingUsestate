// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LockImage = styled.img`
  width: 80px;
  height: 80px;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`

export const Description = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const CustomButton = styled.button`
  color: #e2e8f0;
  font-family: 'Roboto';
  font-size: 11px;
  font-weight: 400;
  background-color: #06b6d4;
  padding: 10px 13px 10px 13px;
  border: none;
  border-radius: 8px;
  margin-top: 100px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 12px 18px 12px 18px;
    font-size: 12px;
  }
`
