import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const env = import.meta.env;

const firebaseConfig = {
  apiKey: env.VITE_REACT_APP_API_KEY,
  authDomain: env.VITE_REACT_APP_AUTH_DOMAIN,
  databaseURL: env.VITE_REACT_APP_DATABASE_URL,
  projectId: env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: env.VITE_REACT_APP_MESSAGING_SENDER_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
