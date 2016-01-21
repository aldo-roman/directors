/** @ngInject */
function config($logProvider, $mdThemingProvider) {
    // enable log
    $logProvider.debugEnabled(true);
    $mdThemingProvider.theme('default')
        .primaryPalette('blue');
}
exports.config = config;
//# sourceMappingURL=index.config.js.map