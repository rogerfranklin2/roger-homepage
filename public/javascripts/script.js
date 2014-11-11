    var app = angular.module('homepage', [] );


    app.controller('headerCtrl', function($anchorScroll, $location, $scope){
        console.log("first");
      this.goToAnchor = function(anchor){
          console.log("Second");
          $location.hash(anchor);
          console.log("third");
      } 
    }
    );

  

    app.controller('PanelController', function($scope){
        this.tab = 1;

        this.setTab = function(setTab) {
            this.tab = setTab;
        }

        this.selectedTab = function(checkTab) {
            return this.tab === checkTab
        }
    });
