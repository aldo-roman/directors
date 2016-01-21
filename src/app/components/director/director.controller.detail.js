/**
 * Created by aldo on 1/21/16.
 */
var DirectorDetailController = (function () {
    /** @ngInject */
    function DirectorDetailController(director) {
        this.director = director.data;
        this.director.birthday = new Date(this.director.dob * 1000);
    }
    return DirectorDetailController;
})();
exports.DirectorDetailController = DirectorDetailController;
//# sourceMappingURL=director.controller.detail.js.map