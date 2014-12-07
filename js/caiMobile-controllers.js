caiMobile.controller('listCtrl', function ContactListCtrl($scope, $http,$location) {
    $http.get('http://obscure-caverns-8872.herokuapp.com/contacts').
        success(function(data, status, headers, config){
            if(data){
                console.log("data is not null");
                $scope.contacts = data.contacts;
            } else {
                console.log("data is null");
            }
        });
    $scope.getContactDetails = function(email) {
        console.log(email);
        $location.path( '/contact/' +  email );
    }
});

caiMobile.controller('showCtrl', function ContactShowCtrl($scope, $http, $routeParams, $location) {
    $http.get('http://obscure-caverns-8872.herokuapp.com/contact/'+$routeParams.id).
        success(function(data, status, headers, config) {
            if(data){
                $scope.contact = data.contact;
            }else {
                //handle error/redirect to list
                $location.path('/');
            }
        });
    $scope.back = function() {
        $location.path('/');
    }
});

caiMobile.controller('addCtrl', function PostAddCtrl($scope, $http, $location) {
    $scope.submitPost = function() {
        $http.post('http://obscure-caverns-8872.herokuapp.com/contact', {
            post_title: $scope.post_title,
            post_body: $scope.post_body
        }).success(function(data, status, headers, config) {
                if(data.success){
                    $location.path('/');
                }else {
                    //do something about the error
                }
            });
    };
});
