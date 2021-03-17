var url = "https://banquev1.herokuapp.com";
function cotisationCtrl($window,$scope,$http){
    $idClient = "";
    $token = $window.sessionStorage.getItem("token");
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
            $http.get(url+"/getCotisationbyCli?idCl="+$idClient).success(function(data2) {
                document.getElementById("cnx").innerHTML = "";
                $scope.dataListe = data2;
            });
        }
    });

    $scope.dec = function(){
        $window.sessionStorage.setItem("clientIdClient","");
        $window.location.href = "login.html";
    }

    $scope.cotisation = function(){
        $nom=$scope.nomCot ;
        $montant=$scope.montantCot ;
        $http.get(url+'/createCotisation?nom='+$nom+'&idClient='+$idClient+'&valeur='+$montant).success(function(data) {
            if(data.status ==200){
                alert(data.message);
                $window.location.href = "cotisation.html";
            } 
        });
    }    
}