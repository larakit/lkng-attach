(function () {

    angular
        .module('larakit')
        .component('adminlteAttachStep1', {
            templateUrl: '/packages/larakit/lkng-attach/components/adminlte-attach-step1/component.html',
            bindings: {
                model: '=',
                load: '&',
                class: '=?'
            },
            controller: Controller
        });

    Controller.$inject = ['$uibModal'];

    function Controller($uibModal) {
        var $ctrl = this;
        $ctrl.gotoStep2 = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                size: 'lg',
                ariaLabelledBy: 'modal-title-bottom',
                ariaDescribedBy: 'modal-body-bottom',
                component: 'adminlteAttachStep2',
                backdrop: 'static',
                keyboard: false,
                resolve: {
                    model: function () {
                        return $ctrl.model;
                    }
                }
            });
            modalInstance.result.then(function (o) {
                if ($ctrl.load) {
                    $ctrl.load()();
                }
            }, function () {
                if ($ctrl.load) {
                    $ctrl.load()();
                }
            });

        };
    }
})();