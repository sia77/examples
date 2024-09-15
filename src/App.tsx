import Accordion from './components/accordion/Accordion';
import CityQuiz from './exampleComponents/cityQuiz/CityQuiz';
import EditProfile from './exampleComponents/editProfile/EditProfile';
import MovingDot from './exampleComponents/movingDot/MovingDot'
import Menu from './exampleComponents/menu/Menu'
import './App.css'

function App() {
  
  return (
    <>
      <h1>Examples</h1>
      <Accordion title="City Quiz">
        <CityQuiz />
      </Accordion>
      <Accordion title="Edit Profile">
        <EditProfile />
      </Accordion>
      <Accordion title="Moving Dot">
        <MovingDot />
      </Accordion>
      <Accordion title="What's Your Snak">
        <Menu />
      </Accordion>
    </>
  )
}

export default App
