import React, { Component } from 'react';
import { connect } from 'react-redux'


const mapStateToProps = (state, ownProps) => {
      let id = Number(ownProps.match.params.post_id)
      return {
            post: state.posts.find(post => post.id === id)
      }
}
class Accueil extends Component {
      constructor(props) {
            super(props);
            this.state = {}
      }
      render() {
            const post = this.props.post
            console.log({ post })

            const postData = post ? (
                  <div className='post'>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                  </div>
            ) : (<p>Aucun Article pour le moment !!!</p>)
            return (
                  postData
            );
      }
}


export default connect(mapStateToProps)(Accueil);

