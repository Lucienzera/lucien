import Cookies from 'js-cookie';
import { redirect } from 'react-router-dom';

async function loginAction() {
  // Todo: fake endpoint call do checks and everything then save token under cookie
  // redirect user to /dashboard (user) or /admin-dashboard (admin)
  Cookies.set('token', 'randomtokenval', { expires: 7 });
  // ROLE depends on response
  const role = 'admin';
  Cookies.set('role', role, { expires: 7 });

  if (role === 'admin') {
    return redirect('/admin-dashboard');
  }
  return redirect('/dashboard');
}

async function loginLoader() {
  // TODO: if user already logged in then redirect them straight away
  // TODO: probablly need to check if token is valid or not first ??? TBD

  const token = Cookies.get('token');
  const role = Cookies.get('role');

  if (token && role === 'admin') {
    return redirect('/admin-dashboard');
  } else if (token) {
    return redirect('/dashboard');
  }
  return null;
}

export { loginAction, loginLoader };
