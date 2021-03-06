function internalLink(configSrvc, $state) {
  function ctrl($scope, $element, $compile) {
    const keyword = $element.text();
    const sref = configSrvc.getLinks()[keyword];
    const link = $(`<a ng-click='intGo()'>${keyword}</a>`);
    $($element).html(link);
    $compile(link)($scope);

    function intGo() {
      $state.go('topic', { topic: sref });
    }
    $scope.intGo = intGo;
  }
  return {
    controller: ctrl,
  };
}

exports.internalLink = internalLink;
