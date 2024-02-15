import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../components/Menu'
import moment from 'moment'
import { AuthContext } from '../context/authContext'
import axios from 'axios'
import DOMPurify from "dompurify";
import { getText } from '../utils/utilFunctions'


const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();
  
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [postId])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='single'>
      <div className="content">
        <img src={`../upload/${post?.img}`} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <Link>
                <img onClick={handleDelete} src={Delete} alt="" />
              </Link>
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {/* {getText(post.desc)} */}
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>
      </div>
      <div className="menu">
        <Menu cat={post.cat}/>
      </div>
    </div>
  )
}

export default Single