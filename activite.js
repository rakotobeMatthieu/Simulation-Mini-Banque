var url = "https://banquev1.herokuapp.com";

function activiteCtrl($scope,$http,$window){
    $token = $window.sessionStorage.getItem("token");
    $idClient = "";
    $http.get(url+"/token?token="+$token).success(function(data) {
        if( data.status == 200){
            $idClient = data.data;
            $http.get(url+"/listeMouvementById?id="+$idClient).success(function(data2) {
                document.getElementById("cnx").innerHTML = "";
                $scope.dataListe = data2;
            });
        
            $http.get(url+"/SommeDecaissement?id="+$idClient).success(function(data) {
                $scope.totDec = data.total;
            });
        
            $http.get(url+"/SommeEncaissement?id="+$idClient).success(function(data3) {
                $scope.totEnc = data3.total;
            });
        }
    });
    

    $scope.recherche = function(){
        document.getElementById("cnx").innerHTML = "Traitement ... ";
        console.log(url+"/SommeDecaissementDate?id="+$idClient+"&date="+$scope.date);
        $http.get(url+"/SommeDecaissementDate?id="+$idClient+"&date="+$scope.date).success(function(data) {
            $scope.totDec = data.total;
        });
    
        $http.get(url+"/SommeEncaissementDate?id="+$idClient+"&date="+$scope.date).success(function(data3) {
            $scope.totEnc = data3.total;
        });

        $http.get(url+"/MouvementByIdAndDate?id="+$idClient+"&date="+$scope.date).success(function(data2) {
            document.getElementById("cnx").innerHTML = "";
            $scope.dataListe = data2;
        });
    }

    $scope.tout = function(){
        document.getElementById("cnx").innerHTML = "Traitement ... ";
        $http.get(url+"/SommeDecaissement?id="+$idClient).success(function(data) {
            $scope.totDec = data.total;
        });
    
        $http.get(url+"/SommeEncaissement?id="+$idClient).success(function(data3) {
            $scope.totEnc = data3.total;
        });

        $http.get(url+"/listeMouvementById?id="+$idClient).success(function(data2) {
            document.getElementById("cnx").innerHTML = "";
            $scope.dataListe = data2;
        });
    }

    $scope.dec = function(){
        $window.sessionStorage.setItem("clientIdClient","");
        $window.location.href = "login.html";
    }
}