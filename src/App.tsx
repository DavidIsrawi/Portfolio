import React from 'react'
import { Toolbar } from './Toolbar'
import { FrontPage } from './FrontPage'
import { Footer } from './Footer'
import { Content } from './Content'
import { TravelContainer } from './MapLists'

function App() {
  const [showNameOnToolbar, setShowNameOnToolbar] = React.useState(true)
  return (
    <div>
      <Toolbar showName={showNameOnToolbar}/>
      <FrontPage setShowNameOnToolbar={setShowNameOnToolbar}/>
      
      <Content/>
      <TravelContainer/>
      <Footer/>
    </div>
  );
}

export default App;
