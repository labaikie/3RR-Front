app.config($stateProvider, $urlRouterProvider) => {

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'staticCtrl as Static'
  })

  $urlRouterProvider.otherwise('/')
}
