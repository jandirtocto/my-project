import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyCcq74DIaFZBlPnIevDY9DJvbo6C7dY52s',
	authDomain: 'futbolx-dev-244c0.firebaseapp.com',
	projectId: 'futbolx-dev-244c0',
	storageBucket: 'futbolx-dev-244c0.appspot.com',
	messagingSenderId: '1064819916933',
	appId: '1:1064819916933:web:bb9924ecfd7a633005a9ec',
	measurementId: 'G-E59CSDTNHL',
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
