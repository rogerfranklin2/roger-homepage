    var app = angular.module('homepage', [] );


    app.controller('headerCtrl', function($anchorScroll, $location, $scope){
      this.goToAnchor = function(anchor){
          $location.hash(anchor);
      } 
    });

    app.controller('PanelController', function($scope){
        this.tab = 1;

        this.setTab = function(setTab) {
            this.tab = setTab;
        }

        this.selectedTab = function(checkTab) {
            return this.tab === checkTab
        }
    });

    app.controller('EmailController', ['$scope', function($scope) {

      $scope.sendEmail = function(email) {
        //TODO:post email object to /email endpoint nodeMailer
        console.log(email);
      };

    }])
