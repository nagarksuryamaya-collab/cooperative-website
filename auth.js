import { signInWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth, db } from "./firebase.js";
import { doc, getDoc }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.memberLogin = async () => {
  const id = memberId.value;
  const pass = password.value;
  const email = id + "@yourcoop.com";

  const user = await signInWithEmailAndPassword(auth, email, pass);
  const snap = await getDoc(doc(db, "members", id));

  if (!snap.data().passwordSet) {
    location.href = `set-password.html?mid=${id}`;
  } else {
    location.href = "member.html";
  }
};
