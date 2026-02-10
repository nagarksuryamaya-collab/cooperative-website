import { auth, db } from "./firebase.js";
import { doc, getDoc }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

auth.onAuthStateChanged(async user=>{
  if(!user) location.href="login.html";
  const id = user.email.split("@")[0];
  const snap = await getDoc(doc(db,"members",id));
  const apps = snap.data().mobileBanking;

  let html="";
  for(let a in apps){
    html += `<p>${a} : ${apps[a]?"✔":"❌"}</p>`;
  }
  mobileApps.innerHTML=html;
});
