import React from 'react'
import { Toolbar } from './Toolbar'
import { FrontPage } from './FrontPage'
import { Footer } from './Footer'
import { Content } from './Content'

function App() {
  const [showProfessional, setShowProfessional] = React.useState(true);

  const changeType = (isProfessional: boolean) => {
    setShowProfessional(isProfessional)
    console.log(isProfessional)
  }

  return (
    <div className="App bg-light text-primary dark:bg-dark dark:text-secondary transition-colors duration-300 text-lg">
      <Toolbar/>
      <FrontPage/>
      
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
