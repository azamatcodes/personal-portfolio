import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
