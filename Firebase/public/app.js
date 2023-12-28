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
window.onload = readData();

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
            console.log(data)
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
    }).then((data) => {
        db.collection('blog')
            .get()
            .then((data) => {
                console.log(data);
                let Actualdata = data.docs.map((item) => {
                    return { ...item.data(), id: item.id }
                })
                let list = document.getElementById('lists')
                Actualdata.forEach((item) => {
                    let listItem = document.createElement('li')
                    listItem.innerHTML = `${item.content}`
                    list.appendChild(listItem)
                })

                console.log('Actualdata', Actualdata)
            })
            .catch((error) => console.log(error))
    })
        .catch((error) => console.log(error))

}
// this function is called when read data button will click only
function readData() {
    db.collection('blog')
        .get()
        .then((data) => {
            console.log(data);
            let Actualdata = data.docs.map((item) => {
                return { ...item.data(), id: item.id }
            })
            let list = document.getElementById('lists')
            Actualdata.forEach((item) => {
                let listItem = document.createElement('li')
                listItem.innerHTML = `${item.content} <button  data-id=${item.id} onClick={deleteData(this)}> delete</button>   <button  data-id=${item.id} onClick={editData(this)}> Edit</button>`

                list.appendChild(listItem)
            })

            console.log('Actualdata', Actualdata)
        })
        .catch((error) => console.log(error))

}

function deleteData(event) {
    let id = event.getAttribute('data-id')
    console.log('event', id);
    db.collection('blog')
        .doc(id)
        .delete()
        .then((data) => {
            alert("data deleted successfully")
            console.log(data);
        })
        .catch((error) => console.log(error))

}

function editData(event) {
    let content = document.getElementById("content").value;
    let id = event.getAttribute('data-id')
    console.log('event', id);
    db.collection('blog')
        .doc(id)
        .update({
            content: content
        })
        .then((data) => {
            alert("data deleted successfully")
            console.log(data);
        })
        .catch((error) => console.log(error))

}