document.addEventListener("DOMContentLoaded", event => {

	const app = firebase.app();
	const db = firebase.firestore();
	const myPost = db.collection('posts').doc('firstpost');
	// myPost.get()
	// 	.then(doc => {
	// 		const data = doc.data();
	// 		document.write( data.title + '</br>')
	// 		document.write( data.views )
	// 	})

	myPost.onSnapshot()
		.then(doc => {
			const data = doc.data();
			document.write( data.title + '</br>')
			document.write( data.views )
		})

	console.log(app);
});

function googleLogin() {
	const provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider)
		.then(result=>{
			const user = result.user;
			const content = $("body").append("<div id='content'></div>");
			$("#content").append(`Hello ${user.displayName}`);
			$("#login-button").css("display", "none");
			console.log(user);
		})
		.catch(console.log)
}

