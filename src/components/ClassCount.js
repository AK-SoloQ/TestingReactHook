import React, { Component } from 'react';
class ClassCount extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  count: 0
            }
            this.addCounterHandler = this.addCounterHandler.bind(this)
      }
      componentDidMount() {
            console.log('je suis dans cdm')
            document.title = `Vous avec clique sur ${this.state.count}`
      }
      addCounterHandler() {
            this.setState((prevState) => { return { count: prevState.count + 1 } })
      }
      componentDidUpdate() {
            document.title = `Vous avec clique sur ${this.state.count} :/`
      }
      render() {
            return (<div className='card card-body mt-5'>
                  Hello world from class count
                  <h1>{this.state.count}</h1>
                  <button type='button' className='btn btn-success' onClick={this.addCounterHandler} >Valider</button>
            </div>);
      }
}

export default ClassCount;