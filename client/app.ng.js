if (Meteor.isClient) {
    angular.module('venueify', ['angular-meteor'])

    .controller('PartiesListCtrl', function ($scope) {
        $scope.parties = [
            {
                'name': 'Dubstep-Free Zone Anders',
                'description': 'Can we please just for an evening not listen to dubstep.'
            },
            {
                'name': 'All dubstep all the time',
                'description': 'Get it on!'
            },
            {
                'name': 'Savage lounging',
                'description': 'Leisure suit required. And only fiercest manners.'
            }
        ];
    });
}
