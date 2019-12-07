import React, { Component } from 'react';
class ClassDisplayKey extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  keyCode: null
            }
            this.handlerKeyUp = this.handlerKeyUp.bind(this)
      }
      handlerKeyUp(e) {
            this.setState({
                  keyCode: e.code
            })
      }
      componentDidMount() {
            document.addEventListener('keyup', this.handlerKeyUp)
      }
      componentWillUnmount() {
            console.log("called")
            document.removeEventListener('keyup', this.handlerKeyUp)
      }


      render() {
            const { keyCode } = this.state
            return (<div className="card card-body">
                  <h1 className="text-center">
                        {keyCode}
                  </h1>
            </div>);
      }
}

export default ClassDisplayKey;