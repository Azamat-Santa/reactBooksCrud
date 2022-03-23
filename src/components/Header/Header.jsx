import React, { useState } from 'react'
import './header.css'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
const Header = () => {

  return (
    <div className='header'>
        <img src="https://www.picng.com/upload/book/png_book_29306.png" alt="" />
        <Link to='/addUser'><Button type='primary' ghost> + Добавить новую книгу</Button></Link>

    </div>
  )
}

export default Header