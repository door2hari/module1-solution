(function() {
    'use strict';

    angular.module('MealChecker', [])
        .controller('MealCheckController', MealCheckController);

    MealCheckController.$inject = ['$scope'];

    function MealCheckController($scope) {
        $scope.foods = '';
        $scope.statusMessage = '';
        $scope.isChecked = false;

        $scope.validateMeal = function() {
            if ($scope.foods.trim().length === 0) {
                $scope.isEmpty = true;
            } else {
                $scope.isChecked = true;
                $scope.isEmpty = false;
                var arrayFoods = $scope.foods.split(',');
                var arrayFoodsWithoutEmpties = arrayFoods.filter(function(v) {
                    return v.trim() !== '';
                });

                if (arrayFoodsWithoutEmpties.length <= 3) {
                    $scope.statusMessage = 'Enjoy!';
                } else {
                    $scope.statusMessage = 'Too much!';
                }
            }
        };
    }
})();
