/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
    $stateProvider
        .state('director', {
            abstract:    true,
            templateUrl: 'app/components/director/main.html'
        })
        .state('director.index', {
            url:          '/directors',
            templateUrl:  'app/components/director/index.html',
            resolve:      {
                directors: ['$http', function ($http: ng.IHttpService) {
                    return $http({method: 'GET', url: 'assets/directors.json'});
                }]
            },
            controller:   'DirectorIndexController',
            controllerAs: 'vm'
        })
        .state('director.detail', {
            url:          '/director',
            templateUrl:  'app/components/director/detail.html',
            resolve:      {
                director: ['$http', function ($http: ng.IHttpService) {
                    return $http({method: 'GET', url: 'assets/director.json'});
                }]
            },
            controller:   'DirectorDetailController',
            controllerAs: 'vm'
        });

    $urlRouterProvider.otherwise('/directors');
}
