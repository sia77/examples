import Accordion from './components/accordion/Accordion';
import CityQuiz from './exampleComponents/CityQuiz';
import EditProfile from './exampleComponents/editProfile/EditProfile'
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
    </>
  )
}

export default App
