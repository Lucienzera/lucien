import Cookies from 'js-cookie';
import { redirect } from 'react-router-dom';

// NOT WORKING CAUSING HANG ON APP
async function adminLoader() {
  const isSuperAdmin = Cookies.get('superadmin');
  const token = Cookies.get('token');

  if (token && isSuperAdmin === 'true') {
    return redirect('/admin-dashboard');
  }
  return redirect('/login');
}

export { adminLoader };
