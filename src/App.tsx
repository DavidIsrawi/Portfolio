import React from 'react'
import { Toolbar } from './Toolbar'
import { FrontPage } from './FrontPage'
import { Footer } from './Footer'
import { Content } from './Content'

function App() {
  const [showNameOnToolbar, setShowNameOnToolbar] = React.useState(true)
  return (
    <div className="App font-main bg-light text-primary dark:bg-dark dark:text-secondary transition-colors duration-300 text-lg">
      <Toolbar showName={showNameOnToolbar}/>
      <FrontPage setShowNameOnToolbar={setShowNameOnToolbar}/>
      
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
