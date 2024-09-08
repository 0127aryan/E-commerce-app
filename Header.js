import React, { useContext } from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoCartSharp } from "react-icons/io5";
import {Link} from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import axios from 'axios';

const Header = () => {

    const state = useContext(GlobalState)
    const [isLogged,setIsLogged] = state.UserApi.isLogged
    const[isAdmin,setIsAdmin] = state.UserApi.isAdmin
    const [cart] = state.UserApi.cart


        const logoutUser = async()=> {
            await axios.get('/user/logout')
            localStorage.clear()
            setIsAdmin(false)
            setIsLogged(false)
        }
    const adminRouter = () => {
        return(
            <>
                <li>
                    <Link to='/create_product'>Create A Product</Link>
                </li>
                <li>
                <Link to='/category'>Categories</Link>
                </li>
            </>
        )
    }
    const loggedRouter = () => {
        return(
            <>
                <li>
                    <Link to='/history'>History</Link>
                </li>
                <li>
                <Link to='/logout' onClick={logoutUser}>Logout</Link>
                </li>
            </>
        )
    }
  return (
    <header>
        <div className='menu'>
        <IoMenuSharp size={30}/>
        </div>

        <div className='logo'>
        <h1>
            <Link to='/'>{isAdmin?'Admin':'E Com Website'}</Link>
        </h1>
        </div>

        <ul>
            <li>
                <Link to='/'>{isAdmin?'Products':'Shop'}</Link>                
            </li>
            {isAdmin && adminRouter()}
            {
                isLogged ? loggedRouter(): <li> <Link to='/login'>Login or Register</Link>
            </li>
            }

            <li>
                <IoMdClose size={30} className='close'/>
            </li>
        </ul>
        {
            isAdmin? '': <div className='cartIcon'>
            <span>{cart.length}</span>
            <Link to='/cart'><IoCartSharp size={30}/></Link>
        </div>
        }
    </header>
  )
}

export default Header