import React from 'react'
import Button from './class-components'
import { Calculator2 } from './calculator'
import { EventData2 } from './event-data'

export default function App() {
  return (
    <>
      <h2><center>react-class-comp-arrow-function</center></h2>
      <Button />
      <hr/>

      <h2><center>react-func-comp-passing-argument-to-event-handling</center></h2>
      <Calculator2 />
      <hr/>

      <h2><center>react-func-comp-checking-event-data</center></h2>
      <EventData2 />
      <hr/>

    </>
  )
}