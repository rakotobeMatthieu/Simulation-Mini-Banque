var url = "https://banquev1.herokuapp.com";
function epargneCtrl($window,$scope,$http){
    $token = $window.sessionStorage.getItem("token");
    $idClient = "";
    $http.get(url+"/token?token="+$token).success(function(data) {
        if( data.status == 200){
            $idClient = data.data;
            $http.get(url+"/clientBy?id="+$idClient).success(function(data) {
                if( data.status == 200){
                    $scope.nom = data.data.nom;
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

    $scope.Epargne = function(){
        $montant=$scope.montant ;
        $duree=$scope.duree ;
        $http.get(url+'/getEpargne?annee='+$duree+'&valeur='+$montant).success(function(data){
            if( data.status == 200){
                console.log('/getEpargne?annee='+$duree+'&valeur='+$montant);
                $scope.Epargnes=data.message;
            }
        });
        
    }
}