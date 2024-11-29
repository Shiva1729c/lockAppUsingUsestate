// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  LockImage,
  Description,
  CustomButton,
} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(false)

  const toggleLock = () => {
    setIsUnlocked(prevStatus => !prevStatus)
  }

  const buttonText = isUnlocked ? 'Lock' : 'Unlock'
  const descriptionStatus = isUnlocked ? 'Unlocked' : 'Locked'
  const lockImageUrl = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const imageAlt = isUnlocked ? 'unlock' : 'lock'
  return (
    <AppContainer>
      <LockImage src={lockImageUrl} alt={imageAlt} />
      <Description>Your Device is {descriptionStatus}</Description>
      <CustomButton onClick={toggleLock}>{buttonText}</CustomButton>
    </AppContainer>
  )
}

export default Unlock
