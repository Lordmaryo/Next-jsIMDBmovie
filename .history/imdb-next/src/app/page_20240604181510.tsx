import { env } from 'process'
import React from 'react'
const API_KEY = env;

const page = () => {
  console.log(API_KEY);
  
  return (
    <div>
    </div>
  )
}

export default page