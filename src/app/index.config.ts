/** @ngInject */
export function config($logProvider: angular.ILogProvider, $mdThemingProvider: ng.material.IThemingProvider) {
  // enable log
  $logProvider.debugEnabled(true);

  $mdThemingProvider.theme('default')
      .primaryPalette('blue');

}
