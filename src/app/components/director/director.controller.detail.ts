/**
 * Created by aldo on 1/21/16.
 */

import {IDirector} from './director.model';

export class DirectorDetailController {

    director: IDirector;

    /** @ngInject */
    constructor(director: {data: IDirector}) {
        this.director = director.data;
        this.director.birthday = new Date(this.director.dob * 1000);
    }
}
