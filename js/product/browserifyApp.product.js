/**
 * Created by Amit Thakkar on 02/05/15.
 */
(function(ng, require) {
    module.exports = ng.module('browserifyApp.product', []);
    require("./ProductController.js");
})(angular, require);