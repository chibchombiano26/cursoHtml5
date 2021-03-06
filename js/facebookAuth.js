 Parse.initialize("ko3A1Yq7USlSM2cEfcS9HBVaa51GWntrYCbiHw5t", "Y8WHScnjIFBDIjRsUSGhOvdUHZNG3DyKC81LGEKS");
            
window.fbAsyncInit = function() {
    Parse.FacebookUtils.init({ // this line replaces FB.init({
      appId      : '1506804242967205', // Facebook App ID
      status     : true,  // check Facebook Login status
      cookie     : true,  // enable cookies to allow Parse to access the session
      xfbml      : true,  // initialize Facebook social plugins on the page
      version    : 'v2.3' // point to the latest Facebook Graph API version
    });

// Run code after the Facebook SDK is loaded.
};

(function(d, s, id){
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) {return;}
js = d.createElement(s); js.id = id;
js.src = "//connect.facebook.net/en_US/sdk.js";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
            
//Sucede cuando la pagina se ha cargado 
window.onload = function(){
    
    //Se busca el boton que se llama btnLogin
    //Y cuando se da click en el llama otra funcion que se llama
    //login facebook
    document.getElementById("btnLogin").onclick = function(){
        loginFacebook();
    }
    
    //Realiza el proceso de loguearse contra facebbok
    
    function loginFacebook(){
        Parse.FacebookUtils.logIn(null, {
         success: function(user) {
            if (!user.existed()) {
              //Ingresa el usuario y lo registra en el sistema
              alert("User registrado en la aplicacion");
            } else {
              //Solo ingresa el usuario
              alert("Usuario logueado");
            }
            
            //Llama a una funcion para sacar datos como el nombre y la imagen del usuario
            obtenerDatosUsuarioIngreso();
          },
          error: function(user, error) {
            alert("Error al realizar login");
          }
        });
    }
    
    //Obtiene datos del usuario como el nombre y la imagen
    function obtenerDatosUsuarioIngreso(){
        //Indicamos que datos queremos del usuario logueado
        FB.api('/me', {fields: 'email, picture,name'}, function(response) {
            //Le asignamos a la imagen la imagen del usuario que ingreso
            document.getElementById("imagenUsuario").src = response.picture.data.url;
        });
    }
    
}