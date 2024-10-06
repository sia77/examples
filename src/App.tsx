import Accordion from './components/accordion/Accordion';
import CityQuiz from './exampleComponents/cityQuiz/CityQuiz';
import EditProfile from './exampleComponents/editProfile/EditProfile';
import MovingDot from './exampleComponents/movingDot/MovingDot';
import Menu from './exampleComponents/menu/Menu';
import ChatApp from './exampleComponents/chat/ChatApp';
import SectionApp from './exampleComponents/postings/SectionApp'
import './App.css'
import ReplaceProp from './exampleComponents/replaceProp/ReplaceProp';
import ReducerContext from './exampleComponents/reducer-context/ReducerContext';
import ReducerContextApp from './exampleComponents/reducer-context2/ReducerContextApp';
import TaskManagerApp from './exampleComponents/taskManager/TaskManagerApp';
import TaskManagerApp2 from './exampleComponents/taskManager2/TaskManagerApp';
import OnlineExampleApp from './exampleComponents/onlineExample/OnlineExampleApp';

function App() {
  
  return (
    <>
      <h1>Examples</h1>
      {/* <Accordion title="City Quiz">
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
      <Accordion title="Reducers - Chat App">
        <ChatApp />
      </Accordion> */}
      {/* <Accordion title="Online example - Task Manager App">
        <OnlineExampleApp />
      </Accordion> */}
      <Accordion title="Complex Reducer - Task Manager App">
        <TaskManagerApp />
      </Accordion>
      <Accordion title="Simple Reducers - Task Manager App ">
        <TaskManagerApp2 />
      </Accordion>
      {/* <Accordion title="Section/Headings - Context">
        <SectionApp />
      </Accordion>
      <Accordion title="More Context">
        <ReplaceProp />
      </Accordion> */}
      {/* <Accordion title="Reducer + Context">
        <ReducerContext />
      </Accordion>

      <Accordion title="Reducer + Context">
        <ReducerContextApp />
      </Accordion> */}

      

      

      
      
    </>
  )
}

export default App
