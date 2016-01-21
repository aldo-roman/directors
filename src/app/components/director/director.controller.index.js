/**
 * Created by aldo on 1/21/16.
 */
var DirectorIndexController = (function () {
    /** @ngInject */
    function DirectorIndexController(directors) {
        this.directors = directors.data;
        this.directors.forEach(function (d) { return d.birthday = new Date(d.dob * 1000); });
    }
    return DirectorIndexController;
})();
exports.DirectorIndexController = DirectorIndexController;
//# sourceMappingURL=director.controller.index.js.map