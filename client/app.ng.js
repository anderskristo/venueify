if (Meteor.isClient) {
    Parties = new Mongo.Collection('parties');

    angular.module('venueify', ['angular-meteor'])

    .controller('PartiesListCtrl', function ($scope, $meteor) {
        $scope.parties = $meteor.collection(Parties);

        $scope.remove = function (party) {
            $scope.parties.remove(party);
        };

        $scope.removeAll = function () {
            $scope.parties.remove();
        };
    });
}
