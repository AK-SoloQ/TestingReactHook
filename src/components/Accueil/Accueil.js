import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mapStateToProps = state => {
      return {
            posts: state.posts
      }
}
class Accueil extends Component {
      constructor(props) {
            super(props);
            this.state = {}
      }
      render() {
            const { posts } = this.props
            const postData = posts.length ? (
                  posts.map(post => {
                        return (
                              <div className='base' key={post.id}>
                                    <Link to={"/post/" + post.id}>
                                          <h1>{post.title}</h1>
                                    </Link>
                                    <p>{post.body}</p>
                              </div>
                        )
                  })
            ) : <p>Aucun Article pour le moment !</p>
            return (
                  postData
            );
      }
}


export default connect(mapStateToProps)(Accueil);

