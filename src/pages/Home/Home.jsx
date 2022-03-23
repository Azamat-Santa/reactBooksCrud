import React, { useEffect, useState } from "react";
import { Table, Radio, Divider, Button, Spin } from "antd";
import { Link, NavLink } from 'react-router-dom';
import EditBook from "../EditBook/EditBook";
import { render } from '@testing-library/react';
const Home = () => {
  const [books, setBooks] = useState();
  const getBook = async () => {
    const req = await fetch("https://secure-oasis-57055.herokuapp.com/books");
    const resp = await req.json();
    const newBooks = resp.map((book) => {
      return {
        key: book.id,
        id: book.id,
        author: book.author,
        title: book.title,
      };
    });
    setBooks(newBooks);
  };

  useEffect(() => {
    getBook();
  }, []);

  const recordLolalStorage = (autor,title)=>{
    localStorage.setItem('author', autor)
    localStorage.setItem('title', title)
  }

  const removeBook = async (bookId) => {
    const res = await fetch(
      "https://secure-oasis-57055.herokuapp.com/books/" + bookId,
      {
        method: "delete",
      }
    );
    getBook();
  };
  const columes = [
    {
      title: "Title",
      dataIndex: "title",
      key: "key",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "key",
    },
    {
      title: "",
      dataIndex: "delete",
      key: "key",
      render: (_,book) => {
        return (
          <NavLink to={'/editBook/' + book.id} onClick={()=>recordLolalStorage(book.author,book.title)}> 
            <Button type="primary" style={{ background: "#08A424" }} >
               Edit
            </Button>
          </NavLink>
        );
      },
    },
    {
      title: "",
      dataIndex: "delete",
      key: "key",
      render: (_, record) => (
        <Button type="danger" id={record.key} onClick={() => removeBook(record.key)}>
          Remove
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Table 
      dataSource={books} 
      columns={columes} 
      pagination={false}
      loading={{ indicator: <div><Spin /></div>, spinning:!books}}
      ></Table>
      
    </div>
  );
};

export default Home;
