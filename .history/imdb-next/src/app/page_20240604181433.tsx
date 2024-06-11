import { env } from 'process'
import React from 'react'
const API_KEY = env;

const page = () => {
  return (
    <div>
      <span>{API}</span>
    </div>
  )
}

export default page