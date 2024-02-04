import Cookies from 'js-cookie';
import { redirect } from 'react-router-dom';

// NOT WORKING CAUSING HANG ON APP
async function userLoader() {
  const token = Cookies.get('token');
  const institutionId = Cookies.get('institutionId');
  0;

  if (token && institutionId) {
    return redirect('/dashboard');
  }
  return redirect('/login');
}

export { userLoader };
