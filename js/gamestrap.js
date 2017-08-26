var app = angular.module('gamestrap', ['ngSanitize', 'ngRoute'])
        .filter('trustUrl', function ($sce) {
            return function (url) {
                return $sce.trustAsResourceUrl(url);
            };
        });

app.config(function ($routeProvider) {
    $routeProvider
            .when("/", {
                templateUrl: "views/gamestrap.html",
                controller: "main"
            })
            .when("/ui", {
                templateUrl: "views/asset.html",
                controller: "uiCtrl"
            })
            .when("/localization", {
                templateUrl: "views/asset.html",
                controller: "localizationCtrl"
            })
            .when("/editorcamera", {
                templateUrl: "views/asset.html",
                controller: "editorcameraCtrl"
            })
            .when("/contact", {
                templateUrl: "views/contact.html",
                controller: "editorcameraCtrl"
            });
});

app.controller("main", function ($scope) {
    $scope.pageIndex = 0;
    $scope.setPageIndex = function (index) {
        $scope.pageIndex = index;
    };
    $scope.getLogo = function () {
        if ($scope.pageIndex === 0 || $scope.pageIndex > $scope.assets.length) {
            return $scope.logo;
        }
        return $scope.assets[$scope.pageIndex - 1].logo;
    };
    $scope.social = [
        {icon: "facebook", url: ""},
        {icon: "twitter", url: ""}
    ];
    $scope.logo = "img/logo.png";
    $scope.assets = [
        {
            title: "UI",
            url: "#!/ui",
            img: "img/gamestrapui.png",
            logo: "img/gamestrapui_logo.png",
            forum: "https://forum.unity3d.com/threads/ui-gamestrap-icons-shapes-effects-and-tools.291090/"
        },
        {
            title: "EDITOR CAMERA",
            url: "#!/editorcamera",
            img: "img/camera.png",
            logo: "img/camera_logo.png",
            forum: "https://forum.unity3d.com/threads/gamestrap-editor-camera-save-camera-views-and-use-it-for-runtime.335646/"
        },
        {
            title: "LOCALIZATION",
            url: "#!/localization",
            img: "img/localization.png",
            logo: "img/localization_logo.png",
            forum: "https://forum.unity3d.com/threads/wip-gamestrap-localization-system.411707/"
        }
    ];
});

app.controller("uiCtrl", function ($scope, $http) {
    $http.get('assets/gamestrapui.json')
            .then(function (res) {
                $scope.asset = res.data;
            });
    $scope.pageIndex = 0;
    $scope.setPageIndex = function (index) {
        $scope.pageIndex = index;
    };

    $scope.getIframeSrc = function (videoId) {
        return 'https://www.youtube.com/embed/' + videoId;
    };
});
app.controller("localizationCtrl", function ($scope, $http) {
    $http.get('assets/localization.json')
            .then(function (res) {
                $scope.asset = res.data;
            });
    $scope.pageIndex = 0;
    $scope.setPageIndex = function (index) {
        $scope.pageIndex = index;
    };

    $scope.getIframeSrc = function (videoId) {
        return 'https://www.youtube.com/embed/' + videoId;
    };
});
app.controller("editorcameraCtrl", function ($scope, $http) {
    $http.get('assets/camera.json')
            .then(function (res) {
                $scope.asset = res.data;
            });
    $scope.pageIndex = 0;
    $scope.setPageIndex = function (index) {
        $scope.pageIndex = index;
    };

    $scope.getIframeSrc = function (videoId) {
        return 'https://www.youtube.com/embed/' + videoId;
    };
});