/**
 * Created by aldo on 1/21/16.
 */

import {IDirector} from './director.model';

export class DirectorIndexController {

    directors: IDirector[];

    /** @ngInject */
    constructor(directors: {data: IDirector[]}) {
        this.directors = directors.data;

        this.directors.forEach(d => d.birthday = new Date(d.dob * 1000));
    }
}
