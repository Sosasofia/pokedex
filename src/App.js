import './App.css'
import Home from './pages/Home'
import Header from './components/Header'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='App-content'>
        <Home />
      </div>
    </div>
  )
}

export default App