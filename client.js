var joueur = {
    id : "",
    nom : "",
    jeton : ""
};

function hitoriqueCtrl($scope,$http) {   
     $scope.logIn = function() {
        $http.get("http://localhost:5000/test/"+$scope.email).success(function(data) {
            if( data.recordset[0]!=null){
                $scope.var = data.recordset[0];
                joueur.id = $scope.var.id;
                joueur.nom = $scope.var.nom;
                joueur.jeton = $scope.var.jeton;
            }
        });
    }
	 
	 $scope.hitrq = function() {
        $http.get("http://localhost:5000/historique/"+$scope.nom).success(function(data) {
			$scope.listHistrq=[];
            for(var i = 0; i< data.recordset.length;i++){
                $scope.listHistrq[i]= data.recordset[i];
            }
        });
    }

	$scope.group = function(){
		$http.get("http://localhost:5000/group/"+$scope.nom).success(function(data) {
			$scope.listGroup=[];
            for(var i = 0; i< data.recordset.length;i++){
                $scope.listGroup[i]= data.recordset[i];
            }
        });
    }

	$scope.pretIndiv = function(){
		$http.get("http://localhost:5000/pretInd").success(function(data) {
			$scope.listInd=[];
            for(var i = 0; i< data.recordset.length;i++){
                $scope.listInd[i]= data.recordset[i];
                if(i>=4){
                    $scope.listIndM[i]= data.recordset[i];
                }
            }
        });
    }

	$scope.pret = function(){
		$http.get("http://localhost:5000/pret/"+$scope.joueurPret+"/"+$scope.jeton).success(function(data){
            // console.log( data.recordset[0].jeton);
			if($scope.jeton > data.recordset[0].jeton) alert("Prêt impossible: le joueur demandé n a pas assez de jetons");
			else{
                joueur.jeton += $scope.jeton;  
                alert("Prêt effectué"); 
            } 
		});
    }

	$scope.achat = function(){
		$http.get("http://localhost:5000/achat/"+$scope.nom+"/"+$scope.jet+"/"+joueur.jeton).success(function(data){});
		alert("Achat effectué");
    }

	$scope.vendre = function(){
		$http.get("http://localhost:5000/vente/"+$scope.nom+"/"+$scope.jet+"/"+joueur.jeton).success(function(data){});
		alert("Vente effectué");
    }

	$scope.gagner = function(){
		$http.get("http://localhost:5000/gagner/"+$scope.nom+"/"+$scope.jet+"/"+joueur.jeton).success(function(data){});
		alert("Vous avez gagné");
    }
}