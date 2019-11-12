import React, {Component}from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import testImage from '../test_image.png'

class Home extends Component {
  render(){
    console.log(this.props)
    const {posts} = this.props
    const postList = posts.length ? (
      posts.map(post => {
        console.log(post.id)
        return (
          <div className="post card" key={post.id}>
            <img src={testImage} alt="test image background"/>
            <div className="card-content">
              <Link to={'/'+post.id}>
              <span className="card-title">{post.title}</span>

              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">no posts yet</div>
    )

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        { postList }
      </div>
    )
  }

}

const mapStateToProps = (state) =>{
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)