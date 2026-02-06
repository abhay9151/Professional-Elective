import './App.css'
import Header from './Components/header.jsx'
import Footer from './Components/footer.jsx'
import Registration from './Components/Registration.jsx'
function App() {
  const y=[2026,2021,2025,2026];
  const c={name:"Abhay",location:"Ghaziabad",estdyear:2015};
  return(
    <>
    <div>
    <Header title="My First React App"/>
    <Header title="Kya hal Chal"/>
    <Footer year={c} company="Abhay"/>
    <Registration/>
    </div>
    </>
    
  )
}

export default App
