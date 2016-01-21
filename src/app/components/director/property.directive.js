/**
 * Created by aldo on 1/21/16.
 */
var PropertyDirective = (function () {
    function PropertyDirective() {
    }
    PropertyDirective.Factory = function () {
        return {
            restrict: 'E',
            scope: {
                key: '=',
                value: '='
            },
            templateUrl: 'app/components/director/property.template.html'
        };
    };
    return PropertyDirective;
})();
exports.PropertyDirective = PropertyDirective;
//# sourceMappingURL=property.directive.js.map