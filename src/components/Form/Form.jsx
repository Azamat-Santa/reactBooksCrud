import React from 'react'
import useInput from '../customHook/useInput';
import './form.css'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
function Form() {
    const author = useInput("", { isEmpty: true });
    const title = useInput("", { isEmpty: true });

    const createBooks = async ()=>{
        const book = {
          title: title.value,
          author: author.value
        };
        const response = await fetch('https://secure-oasis-57055.herokuapp.com/books', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(book)
        });
        
        let result = await response.json();
        console.log(result);
      }

  return (
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

    <Link to='/'>
    <Button
      type="primary"
      disabled={!author.formValid || !title.formValid}
      onClick={()=>{
          createBooks() 
    }}
    >
      Отправить
    </Button>
    </Link>
  </form>
  )
}

export default Form