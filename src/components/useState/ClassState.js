import React, { Component } from 'react'

export default class ClassState extends Component {
      constructor(props) {
            super(props)

            this.state = {
                  counter: 0
            }
            this.addOne = this.addOne.bind(this)
      }

      addOne() {
            this.setState((prevState) => ({ counter: prevState.counter + 1 }))
      }

      render() {
            return (
                  <>
                        <button type='button' className='btn btn-primary' onClick={this.addOne}> +1 </button>
                        <h2> this counter is equal to : {this.state.counter} </h2>
                  </>
            )
      }
}
