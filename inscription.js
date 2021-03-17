var url = "https://banquev1.herokuapp.com";

function inscCtrl($window,$scope,$http){
    
    $scope.insc = function(){
        $scope.loader = 'Traitement ....';
        $http.get(url+'/inscription?nom='+$scope.nom+'&prenom='+$scope.prenom+'&naissance='+$scope.naissance+'&sexe='+$scope.sexe+'&email='+$scope.email+'&mdp='+$scope.mdp+'&phone='+$scope.phone).success(function(data) {
            $window.sessionStorage.setItem("clientIdClient",data.client.idClient);
            $window.sessionStorage.setItem("token",data.client.token);
            $window.location.href = "accueil.html";
        });
    }

    $scope.annule = function(){
        $window.location.href = "login.html";
    }
}