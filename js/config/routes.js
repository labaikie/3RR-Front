app.config($stateProvider, $urlRouterProvider) => {

  $stateProvider

  // .state('home', {
  //   url: '/',
  //   templateUrl: '',
  //   controller: 'staticCtrl as Static'
  // })

  $urlRouterProvider.otherwise('/')
}
