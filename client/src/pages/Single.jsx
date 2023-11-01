import React from 'react'
import { Link } from 'react-router-dom'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
          </div>
          <div className="delete">
            <Link>
              <img src={Delete} alt="" />
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ante urna, pharetra eu luctus nec, fermentum sit amet nibh. Nunc eget nulla sed neque bibendum facilisis. Nam sit amet malesuada diam. Donec consequat sit amet odio at ultricies. Fusce odio ante, laoreet sit amet posuere nec, faucibus vel urna. Nulla facilisi. Donec hendrerit enim sit amet vehicula sollicitudin. Duis pharetra semper felis non auctor. Praesent ultricies dignissim egestas.
          <br />
          <br />
          Morbi ut efficitur augue. Etiam euismod convallis elit. Donec commodo dolor sit amet magna laoreet imperdiet. Mauris placerat faucibus purus, at eleifend augue porttitor vitae. Nullam semper non nibh in laoreet. Sed ut convallis mi. Suspendisse ut nibh laoreet, sagittis turpis sit amet, rhoncus eros. Curabitur ullamcorper erat vel ligula aliquam luctus. Donec eu imperdiet urna, a cursus erat. Nam sed pretium justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl nulla, blandit sed nisl eget, hendrerit lacinia turpis. Suspendisse dapibus nulla in nunc congue laoreet. Morbi erat enim, posuere in facilisis at, interdum vel mi.
          <br />
          <br />
          Duis facilisis consectetur dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sodales tincidunt ipsum sed molestie. Cras in consequat mauris. Aliquam congue rhoncus nisi. Nulla in dapibus ex. Donec est tortor, condimentum in justo vitae, placerat tristique tellus. Aliquam placerat, ante at mollis tincidunt, odio nibh lacinia massa, id blandit enim lorem sed mi. Pellentesque leo dui, vehicula quis fermentum sodales, rhoncus ac orci.
          <br />
          <br />
          Praesent tristique nulla quis cursus scelerisque. Suspendisse potenti. Fusce finibus id diam a consectetur. Praesent fringilla pharetra neque, imperdiet laoreet felis. Sed a nulla sit amet libero euismod tincidunt at placerat ex. Mauris pulvinar in enim quis rhoncus. Praesent suscipit neque nec risus viverra iaculis. Integer ac velit luctus, molestie mi euismod, facilisis quam. Donec vel congue nisi, eu ultricies risus. In blandit feugiat neque id consectetur. Donec viverra vel arcu et volutpat. Etiam maximus gravida ultrices.
          <br />
          <br />
          Praesent luctus condimentum augue, et fringilla libero aliquam ac. Integer aliquam efficitur tincidunt. Phasellus ut sollicitudin erat, ut posuere felis. Pellentesque eget arcu urna. Sed euismod ipsum in nunc viverra, quis malesuada erat hendrerit. Maecenas vestibulum eros quis euismod ornare. Nullam nec nunc a nisi rhoncus efficitur sed ac sem. Praesent euismod ullamcorper laoreet.
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}

export default Single