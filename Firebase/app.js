// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbKZeBTalF45mcWuZgidlTPJ5ry-F_FC8",
    authDomain: "learn-firebase-sit-1.firebaseapp.com",
    projectId: "learn-firebase-sit-1",
    storageBucket: "learn-firebase-sit-1.appspot.com",
    messagingSenderId: "468091830774",
    appId: "1:468091830774:web:9c9211c945010115e687d7"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const db = app.firestore();

function signupCall() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((data) => console.log(data))
        .catch((error) => alert(error))

}
function signIn() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((data) => {
            let token = data.user.multiFactor.user.accessToken;
            if (token) {
                localStorage.setItem("token", token);
                setTimeout(() => {
                    location.href = './dashboard.html'
                }, 2000)

            }
        })
        .catch((error) => alert(error))

}

function createData() {
    let content = document.getElementById("content").value;
    db.collection('blog').add({
        content: content
    }).then((data) => console.log(data))
        .catch((error) => console.log(error))

}