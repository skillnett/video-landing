import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: 'AIzaSyC0q2Nw4Pv89tT23ZCNoTWD62E42ztmVwI',
    authDomain: 'retouch-ai.firebaseapp.com',
    databaseURL: 'https://retouch-ai.firebaseio.com',
    projectId: 'retouch-ai',
    storageBucket: 'retouch-ai.appspot.com',
    messagingSenderId: '227688002713',
    appId: '1:227688002713:web:f5eca17a86dce6e205b408',
    measurementId: 'G-0V9VNKR5V4',
};

let analytics: any = null;

const app = initializeApp(firebaseConfig);

if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
}

export { analytics };
