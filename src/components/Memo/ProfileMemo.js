import React, { useState, useEffect, useMemo } from 'react';
const MyProfile = ({ count, profile }) => {
      console.log('je suis dans le profile')
      return (
            <div>
                  <ul className='list-group'>
                        <li className='list-group-item'><p className='h2'>User ID</p></li>
                        <li className='list-group-item'><strong>Nom:</strong> {profile.name}</li>
                        <li className='list-group-item'><strong>Pseudo:</strong> {profile.username}</li>
                        <li className='list-group-item'><strong>Email:</strong>{profile.email}</li>
                  </ul>
            </div>
      )
}
const MP = React.memo(MyProfile)
function ProfileMemo() {
      const [count, setCount] = useState(1)
      const [profile, setProfile] = useState({})
      const [dark, setDark] = useState(false)
      useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
                  .then(response => response.json())
                  .then(user => {
                        setProfile(user)
                  }).catch(err => {
                        console.error('Erreur : ', err)
                  })
      }, [count])
      const goDark = () => {
            setDark(!dark)
            if (!dark) {
                  document.body.classList.add('bg-secondary')
            } else {
                  document.body.classList.remove('bg-secondary')
            }
      }
      const memoizedValue = useMemo(() => {
            console.log('je suis dans isOverTen')
            return count > 10
      }, [count])
      /*const isOverTen = () => {
            console.log('je suis dans isOverTen')
            return count > 10
      } */
      return (
            <div className='container'>
                  <h1 className='text-center'>useMemo</h1>
                  {memoizedValue && <div className='alert alert-danger' role='alert'> STOP !!</div>}
                  <button className='btn btn-info mb-3' onClick={() => setCount(count + 1)}>Increment : {count}</button>
                  <button className='btn btn-dark mb-3 float-right' onClick={goDark}>changer</button>
                  <MP profile={profile} count={count} />
            </div>
      )
}

export default React.memo(ProfileMemo);