var url = "https://banquev1.herokuapp.com";

function profilCtrl($window,$scope,$http){
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
                    $scope.naissance = data.data.naissance;
                    $scope.sexe = data.data.sexe;
                    $scope.email = data.data.email;
                    $scope.phone = data.data.phone;
                    $scope.mdp = data.data.mdp;
                    $scope.mdpVer2 = data.data.mdp;
                }
            });
        }
    });

    $scope.dec = function(){
        $window.sessionStorage.setItem("clientIdClient","");
        $window.location.href = "login.html";
    }

    $scope.modif = function(){
        $http.get(url+'/updateClient?id='+$idClient+'&nom='+$scope.nom+'&prenom='+$scope.prenom+'&naissance='+$scope.naissance+'&sexe='+$scope.sexe+'&email='+$scope.email+'&mdp='+$scope.mdpVer+'&phone='+$scope.phone+'&mdp2='+$scope.mdpVer2).success(function(data) {
            if(data.status===500){
                alert(data.message);
            }
            else if(data.status===501){
                alert(data.message);
            }
            else{
                alert(data.message);
                $window.location.href = "profil.html";
            }
        })
    }

    $scope.modifMdp = function(){
        $http.get(url+'/updateMdp?id='+$idClient+'&mdpNouv='+$scope.mdpNouv+'&mdpAnc='+$scope.mdpVer2+'&mdpConf='+$scope.mdpNouv2+'&mdpAct='+$scope.mdp).success(function(data) {
            if(data.status===500){
                alert("Erreur: "+data.message);
            }
            else if(data.status===501){
                alert("Erreur: "+data.message);
            }
            else if(data.status===502){
                alert("Erreur: "+data.message);
            }
            else{
                alert("Succès: "+data.message);
                $window.location.href = "login.html";
            }
        })
    }
}