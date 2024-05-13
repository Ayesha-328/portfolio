import React from 'react'

function FormMessage({submit}) {
  return (
    <>
    {
        submit ?
        <h1>Your message has been successfully sent. Thanks for contacting.</h1>
        :
        <h1>There was an error sending your messge. Please try again</h1>

    }
    </>
  
)}

export default FormMessage