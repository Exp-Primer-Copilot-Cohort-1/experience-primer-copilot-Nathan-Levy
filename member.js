function skillsMemeber(){
    return {
        restrict: 'E',
        templateURL: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }
    };
}