import React from 'react'
import './button.css'
import { Button } from '@material-ui/core'

const CustomButton = ({text, icon}) => {
  return (
    <Button 
      className='custom_btn'
      endIcon={
        icon ? <div className='btn_icon_container'>
          {icon}</div> : null}>
            <span className='btn_text' style={{display: "flex"}}>{text}</span></Button>
  )
}

export default CustomButton;
