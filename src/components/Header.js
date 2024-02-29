import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { BookIcon, BookOpenIcon, PlusIcon } from '@heroicons/react/24/solid';

const Header = () => {
    return (
        <header style={{ backgroundColor: '#212121', display: '', }}>
            <Nav>
                <div style={{ padding: '20px', paddingLeft:'100px'}}>
                    <h1>Book Management App</h1>
                </div>

                <div style={{display:'flex', padding:'15px'}} className='links'>
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink to='/' className='links'>
                               Books List
                            </NavLink>
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link>
                            <NavLink to='/add' className='links'>
                            Add Book
                            </NavLink>
                        </Nav.Link>
                    </Nav.Item>
                </div>
            </Nav>
        </header>
    );
};

export default Header;