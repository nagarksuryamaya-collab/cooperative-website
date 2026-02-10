<script type="module">
import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBkPOJ4Q_NX4O3hyXoBvgR-8Xf9l3fxFLU",
  authDomain: "coop-website-a56bb.firebaseapp.com",
  projectId: "coop-website-a56bb",
  storageBucket: "coop-website-a56bb.firebasestorage.app",
  messagingSenderId: "964589936606",
  appId: "1:964589936606:web:2c22931507ad69ee0d474f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
</script>
