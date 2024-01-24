import Cookies from 'js-cookie';
import { redirect } from 'react-router-dom';

async function deciderLoader() {
  const token = Cookies.get('token');
  const role = Cookies.get('role');

  if (token && role === 'admin') {
    return redirect('/admin-dashboard');
  } else if (token) {
    return redirect('/dashboard');
  }
  return redirect('/login');
}

function DeciderRoute() {
  /*TODO: 
    This section should include checking for user cookies:
        - token value
        - date
        - role (user/admin)

    if cookie exists then redirect to /dashboard (user) /admin-dashboard (admin)
    if cookie does not exists then redirect to /login
    */
  return (
    <>
      <h1>Loading...</h1>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { DeciderRoute, deciderLoader };
