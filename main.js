var myApp = angular.module('myApp', []);
myApp.factory('Data', function(){
        return {
            'message' : 'ita'
        }
});

myApp.filter('reverse', function(){
    return function(text){
        return text.split('').reverse().join('');
    }
});

myFirstController = function($scope, Data){
    $scope.data = Data;
};

mySecondController = function($scope, Data){
    $scope.data = Data;
    $scope.reversedMessage = function(){
        return $scope.data.message.split("").reverse().join("");
    }
};
