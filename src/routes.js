export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('#');
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    component: 'home',
    lazyLoad() {
      return import('./app/home/index')
        .then(home => {
          console.log(home);
        })
        .catch(err => console.log(err));
    }
  });

  $stateProvider.state('lazy', {
    url: '/lazy',
    component: 'lazy',
    lazyLoad() {
      return import('./app/lazy/index').then(lazy => {
        console.log(lazy);
      });
    }
  });
}
