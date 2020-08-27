import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'

const WebApp = () => {

  const [ data, setData ] = useState({})
  
  
    const fetchingData = () => {
        axios
        .get('https://medcabinet-ds-0820.herokuapp.com/labels')
        .then(res => {
          
          setData(res.data)
          console.log(res)
        })
        .catch(err => console.error(err));
        
    }
    console.log(data)

   useEffect(() => {
     fetchingData()
   }, []) 



 
  return (
      <>
    <Form>
      <FormGroup>
        <Label for="effects">Effects</Label>
        <Input type="select" name="effects" id="exampleSelect">
          {data !== {} && data.effects.map(effect => {
            
            return(
            <option value={effect}>{effect}</option>
          )})}
        </Input>
      </FormGroup>
      </Form>
      </>
  );
};

export default WebApp;