var url = "https://banquev1.herokuapp.com";
    src="http://code.angularjs.org/1.0.0rc10/angular-1.0.0rc10.js"
    src="http://code.angularjs.org/1.0.0rc10/angular-cookies-1.0.0rc10.js"

    
function loginCtrl($window,$scope,$http,$cookieStore) { 
    $scope.email = "rindranyainaramiandrisoa@gmail.com";
    $scope.mdp = "rindraMdp";
        if($cookieStore.get('cookiesLogin')==null){
            //$window.location.href = "login.html";
        }else{
            $window.location.href = "accueil.html";
        }
    $scope.login = function(){
        $scope.loader = 'Traitement ....';
        $http.get(url+"/estClient?email="+$scope.email+"&mdp="+$scope.mdp).success(function(data) {
            if( data.status == 403){
                $scope.loader = '';
                alert("Erreur: "+data.message);
            }
            else{
                $window.sessionStorage.setItem("clientIdClient",data.data.idClient);
                $window.sessionStorage.setItem("token",data.data.token);
                $window.location.href = "accueil.html";
                $cookieStore.put('cookiesLogin',data.data.token);
            }
        });
    }

    $scope.inscription = function(){
        $window.location.href = "inscription.html";
    }
}