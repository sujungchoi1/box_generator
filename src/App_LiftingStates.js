import React, { useState } from 'react';
import Form from './liftingstates/Form';
import Display from './liftingstates/Display';
    
    
function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");
  
  const youveGotMail = ( newMessage ) => {
      setCurrentMsg( newMessage );
  }
  
  return (
      <>
          <Form onNewMessage={ youveGotMail } />
          <Display message={ currentMsg } />
      </>
  );
}
  
    
export default App;

