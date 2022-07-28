import './App.css'
import { Navbar,Loader,Welcome,Services,Transactions,Footer } from './Components'


function App() {

  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar/>
        <Welcome/>
        <Services/>
        <Transactions/>
      </div>
     
    </div>
  )
}

export default App
