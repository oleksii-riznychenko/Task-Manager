import React, {JSX, useState} from 'react'
import './Footer.scss'

export const Footer = (): JSX.Element => {
  const [date] = useState<number>(new Date().getFullYear())

  return (
    <footer className='footer'>
      <p>Oleksii Riznychenko</p>
      <strong>{date}</strong>
    </footer>
  )
}
