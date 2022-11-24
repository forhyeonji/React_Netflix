import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [keyword, setKeyword]=useState('');
  const handleChange = ({ target: { value } }) => setKeyword(value);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/movies?query=${keyword}`)
  };


  const search=(event)=>{
    if (event.key == "Enter"){
      // 새로고침 금지
      event.preventDefault();
      // 입력한 검색어를 읽어와서
      let keyword=event.target.value;
      // event.target.value = null;
     
      navigate(`/movies?query=${keyword}`)
  }
  }
  return (
    <div>
        <nav className='navbox'>
            <div>
                <img src='https://noona-netflix.netlify.app/logo.png' width={140} className='navbar-logo'/>
            
                <ul className='navbar-menu'>
                <Link to='/' className='nav-item'>Home</Link>
                <Link to='/movies' className='nav-item'>Movies</Link>
                </ul>
            
            </div>

            

            <form className='navbar-search' onSubmit={handleSubmit}>
                <input
                    className='navbar-input'
                    placeholder="Search"
                    onKeyDown={(event)=>search(event)}
                    onChange={handleChange}>
                </input>
                <button
                    type="submit"
                    className='navbar-btn'
                >        
                    Search
                </button>
            </form>


        </nav>

    </div>
  )
}

export default NavBar