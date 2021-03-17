var url = "https://banquev1.herokuapp.com";

function decaisseCtrl($window,$scope,$http){
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

    $scope.valider = function(){
        const val = -$scope.montant;
        var date = new Date();
        var date2 = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
        $scope.loader = "Traitement ...";
        $http.get(url+'/encaisser?id='+$idClient+'&valeur='+val+'&date='+date2).success(function(data) {
            if(data.status === 200){
                alert(data.message);
                $window.location.href = "accueil.html";
              }
              else{
                $scope.loader = "";
                alert(data.message);
              }
        });
    }

}