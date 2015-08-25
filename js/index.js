// http://angulartutorial.blogspot.com/2014/03/rating-stars-in-angular-js-using.html

(function () {
    'use strict';

    angular
            .module('app', [])
            .controller('RatingController', RatingController)
            .directive('starRating', starRating);

    function RatingController($scope) {
        //this.rating1 = 1;
        //this.rating2 = 1;
        //this.rating3 = 1;

        this.rateFunction = function (rating) {
            console.log('Rating selected: ' + rating);
        };

        $scope.onClickSubmit = function () {
            alert('Finally you are submitting the feedback');

            //var x ;//= $scope.modelList[0].presenter;
            // alert('Value of Presenter = ' + x);


            angular.forEach($scope.facilitatorList, function (value, index) {

                var ratings = value.rating1 + ' - ' + value.rating2 + ' - ' + value.rating3

                alert(value.presenter + ' - ' + ratings);
            })
            
            alert($scope.likeAboutProgram);
            alert($scope.improvementInProgram);
        };

        $scope.facilitatorList =
                [
                    {
                        presenter: "Amit Borkar",
                        feedbackParam1: "Depth of Knowledge displayed",
                        rating1: 1,
                        feedbackParam2: "Style of Delivery",
                        rating2: 1,
                        feedbackParam3: "Ability to respond to queries",
                        rating3: 1
                    },
                    {
                        presenter: "Sanjeevkumar Pitambare",
                        feedbackParam1: "Depth of Knowledge displayed",
                        rating1: 1,
                        feedbackParam2: "Style of Delivery",
                        rating2: 1,
                        feedbackParam3: "Ability to respond to queries",
                        rating3: 1
                    },
                    {
                        presenter: "Chinmay Inamdar",
                        feedbackParam1: "Depth of Knowledge displayed",
                        rating1: 1,
                        feedbackParam2: "Style of Delivery",
                        rating2: 1,
                        feedbackParam3: "Ability to respond to queries",
                        rating3: 1
                    }

                ];
        $scope.programAndCourseDesign =
                [
                    {
                        title: "Program & Course Design",
                        feedbackParam1: "The Extent to which the course objectives are met",
                        rating1: 1,
                        feedbackParam2: "Relevance and Quality of Course Content",
                        rating2: 1,
                        feedbackParam3: "Structure/Sequence/Methodology of Contents",
                        rating3: 1,
                        feedbackParam4: "Did the Program begin on time?",
                        rating4: 1,
                        feedbackParam5: "Did the program end on time?",
                        rating5: 1
                    }
                ];
        $scope.trainingFacility =
                [
                    {
                        title: "Training Facility Feedback",
                        feedbackParam1: "Classroom/Lab Ambience",
                        rating1: 1,
                        feedbackParam2: "Audio/Video Equipments",
                        rating2: 1,
                    },
                ];

    }

    function starRating() {
        return {
            restrict: 'EA',
            template:
                    '<ul class="star-rating" ng-class="{readonly: readonly}">' +
                    '  <li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}" ng-click="toggle($index)">' +
                    '    <i class="fa fa-star"></i>' + // or &#9733
                    '  </li>' +
                    '</ul>',
            scope: {
                ratingValue: '=ngModel',
                max: '=?', // optional (default is 5)
                onRatingSelect: '&?',
                readonly: '=?'
            },
            link: function (scope, element, attributes) {
                if (scope.max == undefined) {
                    scope.max = 5;
                }
                function updateStars() {
                    scope.stars = [];
                    for (var i = 0; i < scope.max; i++) {
                        scope.stars.push({
                            filled: i < scope.ratingValue
                        });
                    }
                }
                ;
                scope.toggle = function (index) {
                    if (scope.readonly == undefined || scope.readonly === false) {
                        scope.ratingValue = index + 1;
                        scope.onRatingSelect({
                            rating: index + 1
                        });
                    }
                };
                scope.$watch('ratingValue', function (oldValue, newValue) {
                    if (newValue) {
                        updateStars();
                    }
                });
            }
        };
    }
})();