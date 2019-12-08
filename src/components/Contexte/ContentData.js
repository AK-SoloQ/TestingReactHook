import React, { useContext } from 'react';
import { UserContext, ColorContext } from './MyContext'
function ContentData() {
      const user = useContext(UserContext)
      const color = useContext(ColorContext)
      return (
            <div>
                  <ul style={{ color }}>
                        <li>Name:{user.name}</li>
                        <li>Age:{user.age}</li>
                  </ul>
                  { /* <UserContext.Consumer>
                  {
                        (user) => {
                              console.log(user)
                              return (
                                    <ColorContext.Consumer>
                                          {(color) => {
                                                return (
                                                      <ul style={{ color }}>
                                                            <li>Name:{user.name}</li>
                                                            <li>Age:{user.age}</li>
                                                      </ul>
                                                )
                                          }
                                          }
                                    </ColorContext.Consumer>
                              )
                        }
                  }
            </UserContext.Consumer> */}
            </div>
      )
}

export default ContentData;