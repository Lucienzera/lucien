import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Cookies from 'js-cookie';
import { ActionFunction, redirect } from 'react-router-dom';
import { auth } from '../../../firebase';

type Claims = {
  admin: boolean;
  superAdmin: boolean;
  institution_id: string;
};

const loginAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const { email, password } = Object.fromEntries(formData);
  try {
    const response = await signInWithEmailAndPassword(auth, email as string, password as string);
    const { claims, token } = await response.user.getIdTokenResult();
    const { admin, superAdmin, institution_id: institutionId = '' } = claims as Claims;

    // Early redirect if user tries to login with non admin creds
    if (!admin) {
      await signOut(auth);
      return redirect('/');
    }

    Cookies.set('superadmin', JSON.stringify(superAdmin), { expires: 7 });
    Cookies.set('token', window.btoa(token), { expires: 7 });

    if (institutionId) {
      Cookies.set('institutionId', window.btoa(institutionId), { expires: 7 });
    }

    if (superAdmin) {
      return redirect('/admin-dashboard');
    }

    return redirect('/dashboard');
  } catch {
    return redirect('/');
  }
};

async function loginLoader() {
  const isSuperAdmin = Cookies.get('superadmin');
  const token = Cookies.get('token');
  const institutionId = Cookies.get('institutionId');

  if (token && isSuperAdmin === 'true') {
    return redirect('/admin-dashboard');
  } else if (token && institutionId) {
    return redirect('/dashboard');
  }
  return null;
}

export { loginAction, loginLoader };
