/**
 * Created by aldo on 1/21/16.
 */

export class PropertyDirective {

    static Factory(): ng.IDirective {
        return {
            restrict:     'E',
            scope:        {
                key: '=',
                value: '='
            },
            templateUrl:  'app/components/director/property.template.html'
        };
    }
}

