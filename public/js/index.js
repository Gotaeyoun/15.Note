/************************전역설정*****************************/



var auth = firebase.auth();
var googleAuth = new firebase.auth.GoogleAuthProvider();






/************************사용자 지정***************************/






/************************이벤트 핸들러****************************/
function onLogin(){
	auth.signInWithPopup(googleAuth);
}
function onLogout(){
	auth.signOut();
}
function onAuthStateChg(data){
	console.log(data);
	if(data){
		$(".bt-login").hide();
		$(".logout-wrap").addClass("d-flex").removeClass("d-none");
		$(".header .icon").attr("src", data.photoURL);
		$(".header .email").html(data.email);
	}
	else{
		$(".bt-login").show();
		$(".logout-wrap").addClass("d-none").removeClass("d-flex");
	}
}





/************************이벤트 등록****************************/
auth.onAuthStateChanged(onAuthStateChg);
$(".bt-login").click(onLogin);
$(".bt-logout").click(onLogout);