import Login from './components/Login'
import { Routes, Route } from "react-router-dom"
import Signup from './components/Signup'
import Home from './components/HOME/Home'
import NewResearchProposal from './components/HOME/NewResearchProposal'
import Publications from './components/HOME/Publications'
import Help from './components/HOME/Help'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/NewResearchProposal' element={<NewResearchProposal />} />
          <Route path='/Publications' element={<Publications />} />
          <Route path='/Help' element={<Help />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Signup />} />
      </Routes>
    </>
  )
}

export default App