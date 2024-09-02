import React from 'react'
import Button from './class-components'
import { Calculator2 } from './calculator'
import { EventData2 } from './event-data'
import RefsFunc from './refs-func'
import MessageBox from './state-func'
import { userContext } from './context'
import Header2 from './context-header2'
import Content2 from './context-content2'

export default function App() {
  let [user, setUser] = React.useState('')
  return (
    <>
      <h2><center>react-contextStudy</center></h2>
        <userContext.Provider value = {[user, setUser]}>
          <Header2/>
          <Content2/>
        </userContext.Provider>
      <hr/>

      <h2><center>react-useState(func)</center></h2>
      <MessageBox/>
      <hr/>

      <h2><center>react-useRef(func)</center></h2>
      <RefsFunc/>
      <hr/>

      <h2><center>react-func-comp-checking-event-data</center></h2>
      <EventData2/>
      <hr/>

      <h2><center>react-func-comp-passing-argument-to-event-handling</center></h2>
      <Calculator2/>
      <hr/>

      <h2><center>react-class-comp-arrow-function</center></h2>
      <Button/>
      <hr/>      
    </>
  )
}