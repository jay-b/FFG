angular.module('starter.controllers', [])
.controller('LoginCtrl', function($scope,$state) {
  $scope.fLogin = function()
    {
      $state.go('tab.dash');
    }
  $scope.fRegister = function()
    {
      $state.go('register1');
    }
})
.controller('Register1Ctrl', function($scope,$state) {
  $scope.fNext = function()
    {
      $state.go('register2');
    }
})
.controller('Register2Ctrl', function($scope,$state) {
  $scope.fNext = function()
    {
      $state.go('register3');
    }
})
.controller('Register3Ctrl', function($scope,$state) {
  $scope.fRegisterView = function()
    {
      $state.go('register_view');
    }
})
.controller('RegisterViewCtrl', function($scope,$state) {
  $scope.fCountinue = function()
    {
      $state.go('register3');
    }
})
.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});