

    /**
     * AngularJSのContorllerの雛形
     */
    var MyController = function($scope){
        //プロパティ
        $scope.message = "Hello World";
        //Controllerに属するメソッドの定義
        $scope.action = function (){
            $scope.message = "good by everybody";
        };
        $scope.testMethod = function (){
            alert("アングラーJSテストメソッド");
        };
    };

    var TestController = function($scope){
        $scope.testMessage = "angular js";
        $scope.testMethod = function (){
            $scope.testMessage = "good by everybody";
        };
        $scope.loadMethod = function(){
            alert("onloadイベントの実行");
        }
    };

    var SampleController = function($scope){
        $scope.sampleMessage = "サンプルメッセージ";
        $scope.sampleMethod = function (){
            $scope.sampleMessage ="サンプルメッセージを変更";
        }
        $scope.alertMethod = function (){
            alert("サンプルメソッドのアラートを表示させる。");
        }
    }

    var FrontController = function($scope){
        alert(location.href);
        location.href="/#/linkList";
        $scope . redirectMethod = function (){
            //リダイレクト処理
        }
    }

    /**
     * AngularJSのモジュール名の指定
     * HTMLタグ上にng-app="モジュール名"の属性を指定する。
     */
    var appModule = angular.module("senbiki", ["ngRoute"]);
    appModule.controller("myController", MyController);
    appModule.controller("testController", TestController);
    appModule.controller("sampleController", SampleController);
    appModule.controller("frontController", FrontController);

    /**
     * AngularJS route
     * ルーティング処理
     */

    appModule.config(['$routeProvider',
        function($routeProvider){
            $routeProvider
            .when("/",{
                    controller : "frontController",
                    templateUrl: "./views/front.html"
            })
            .when("/linkList",{
                    controller : "myController",
                    templateUrl: "./views/link_list.html"
            })
            .when("/angular_01",{
                    controller : "myController",
                    templateUrl: "./views/angular_01.html"
            })
            .when("/angular_02",{
                    controller : "myController",
                    templateUrl: "./views/angular_02.html"
            })
            .when("/angular_03",{
                    controller : "sampleController",
                    templateUrl: "./views/angular_03.html"
            })
            .otherwise({
                reidirectTo: "/404"
            })
        }
    ]);
