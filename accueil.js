var url = "https://banquev1.herokuapp.com";

function accueilCtrl($window,$scope,$http) { 
    $token = $window.sessionStorage.getItem("token");
    $http.get(url+"/token?token="+$token).success(function(data) {
        if( data.status == 200){
            $idClient = data.data;
            $http.get(url+"/clientBy?id="+$idClient).success(function(data) {
                if( data.status == 200){
                    $scope.prenom = data.data.prenom;
                    $scope.argent = data.data.argent;
                }
            });
        }
    });
    

    $scope.dec = function(){
        $window.sessionStorage.setItem("clientIdClient","");
        $window.location.href = "login.html";
    }
}