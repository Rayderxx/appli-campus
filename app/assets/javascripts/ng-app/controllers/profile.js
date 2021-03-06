app.controller('ProfileCtrl', ['$scope', 'Student', '$routeParams', function ($scope, Student, $routeParams) {

    $scope.currentUser = Student.getCurrentUser();

    Student.query(function (students) {
        l = students.length;
        for (i = 0; i < l; i++) {
            if ($routeParams.id == students[i].id) {
                $scope.student = students[i];
            }
        }
    });
    $scope.back = function () {
        window.history.back();
    }
}]);
