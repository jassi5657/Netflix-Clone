import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { IoMdSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <Container className='bg-gradient-to-b from-slate-950 to-transparent text-white fixed w-full z-50 transition-colors duration-300'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
        <div className="links">
        <Link to="/">Home</Link>
        <Link to="/browse/tv">Tv Shows</Link>
        <Link to="/browse/movie">Movies</Link>
        <Link to="">New & Popular</Link>
        <Link to="">My List</Link>
        <Link to="/browsebyGenres">Browse By Genres</Link>
        </div>

        <div className="end">
            <IoMdSearch />
            <IoMdNotificationsOutline style={{marginLeft:"30px"}}/>
        </div>

    </Container>
  )
}


const Container = styled.div`
display: flex;

margin: 20px;
margin-top: -1px;
padding: 10px;
color: white;

img{
    width: 100px;
    height: 30px;
}


.links{
    width: 800px;
display: flex;
justify-content: center;
justify-content: space-evenly;
}

.end{
    display: flex;
    font-size: 30px;
    margin-left: 340px;

}

`;

export default Navbar
