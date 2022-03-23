import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { Button } from 'antd';
import useInput from './../../components/customHook/useInput';

const EditBook = (props) => {
    const bookId =  useLocation().pathname.substring(10)
    const authorFromLocal= localStorage.getItem('author')
    const titleFromLocal= localStorage.getItem('title')  
    const author = useInput(authorFromLocal, { isEmpty: true });
    const title = useInput(titleFromLocal, { isEmpty: true });

    const editBook = async ()=>{
        const book = {
          title: title.value,
          author: author.value
        };
        const response = await fetch('https://secure-oasis-57055.herokuapp.com/books/' + bookId , {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(book)
        });
        
        let result = await response.json();
        console.log(result);
      }

  return (
    <div style={{width:'40%', margin:'100px auto'}}>
    <form action="">
    {author.isDirty && author.isEmpty ? (
      <div style={{ color: "red" }}>Автор не может быть пустым</div>
    ):<div className='form__text'>Название автора</div>}
    <input
      type="text"
      name="author"
      placeholder='Название автора'
      value={author.value}
      onChange={(e) => author.onChange(e)}
      onBlur={(e) => author.onBlur(e)}
    />

    {title.isDirty && title.isEmpty ? 
      <div style={{ color: "red" }}>Заголовок не может быть пустым</div>
    : <div className='form__text'> Заголовок</div>}
    <input
      type="text"
      name="title"
      placeholder='Заголовок'
      value={title.value}
      onChange={(e) => title.onChange(e)}
      onBlur={(e) => title.onBlur(e)}
    />

    <Link to='/' style={{width:'20%', margin:'20px auto'}}>
    <Button
      type="primary"
      disabled={!author.formValid || !title.formValid}
      onClick={()=>{
          editBook() 
    }}
    >
      Изменить
    </Button>
    </Link>
  </form>
    
    </div>
  )
}

export default EditBook