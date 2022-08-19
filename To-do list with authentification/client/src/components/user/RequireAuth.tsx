import {Redirect} from 'react-router-dom'

const RequireAuth = (Component: any) => { // Prevent invaid access
  return (props: any) => {
    const token = localStorage.getItem('token');

    if (!token) { // Not authorized
      alert('Invalid access')
      return <Redirect to='/'></Redirect>
    }
    else
      return <Component {...props} />
  }
}

export default RequireAuth;
