// var app=angular.module("module",[]);
// app.controller("controller",function($scope){
//     $scope.changename = function(){
//         var input = prompt("Enter a name here");
//         if(input) $scope.name = input;
//     }
// })
var app = angular.module('module', []);
app.controller('unitCtrl', function($scope) {
    $scope.unit = ["Pcs","Boxes","Dozens"];
});
app.controller('manufacturerCtrl',function($scope){
    $scope.manufacturer = ["Dell","Lenovo","Asus","Hp"];
});
app.controller('brandCtrl',function($scope){
    $scope.brand = ["Dell","Lenovo","Asus","Hp"];
});
app.controller('attr1Ctrl',function($scope){
    $scope.attr1 = ['RAM',"Processor","DISC"];
});
app.controller('attr2Ctrl',function($scope){
    $scope.attr2 = ['RAM',"Processor","DISC"];
});




var arrRam = [];
var arrProcessor = [];
var arrDisk = [];
var arrSsd = [];
var itemGroupNameInput; 


app.controller('tagsController1', function($scope) {
	$scope.inputTags = [];

	$scope.addTag = function() {
		if ($scope.tagText.length == 0) {
			return;
		}

		$scope.inputTags.push({name: $scope.tagText});
		arrRam.push($scope.tagText);
		
		$scope.tagText = '';
		
	}

	$scope.deleteTag = function(key) {
		if ($scope.inputTags.length > 0 &&
			$scope.tagText.length == 0 &&
			key === undefined) {
			$scope.inputTags.pop();
		} else if (key != undefined) {
			$scope.inputTags.splice(key, 1);
		}
	}
});

app.controller('tagsController2', function($scope) {
	$scope.inputTags = [];

	$scope.addTag = function() {
		if ($scope.tagText.length == 0) {
			return;
		}

		$scope.inputTags.push({name: $scope.tagText});
		arrProcessor.push( $scope.tagText);
		
		$scope.tagText = '';
	}

	$scope.deleteTag = function(key) {
		if ($scope.inputTags.length > 0 &&
			$scope.tagText.length == 0 &&
			key === undefined) {
			$scope.inputTags.pop();
		} else if (key != undefined) {
			$scope.inputTags.splice(key, 1);
		}
	}
});

app.controller('tagsController3', function($scope) {
	$scope.inputTags = [];

	$scope.addTag = function() {
		if ($scope.tagText.length == 0) {
			return;
		}

		$scope.inputTags.push({name: $scope.tagText});
		arrDisk.push( $scope.tagText);
		
		$scope.tagText = '';
	}

	$scope.deleteTag = function(key) {
		if ($scope.inputTags.length > 0 &&
			$scope.tagText.length == 0 &&
			key === undefined) {
			$scope.inputTags.pop();
		} else if (key != undefined) {
			$scope.inputTags.splice(key, 1);
		}
	}
});

app.controller('tagsController4', function($scope) {
	$scope.inputTags = [];

	$scope.addTag = function() {
		if ($scope.tagText.length == 0) {
			return;
		}

		$scope.inputTags.push({name: $scope.tagText});
		arrSsd.push( $scope.tagText);
		
		$scope.tagText = '';
	}

	$scope.deleteTag = function(key) {
		if ($scope.inputTags.length > 0 &&
			$scope.tagText.length == 0 &&
			key === undefined) {
			$scope.inputTags.pop();
		} else if (key != undefined) {
			$scope.inputTags.splice(key, 1);
		}
	}
});


app.directive('tagInput', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			scope.inputWidth = 20;


			element.bind('keydown', function(e) {
				if (e.which == 9) {
					e.preventDefault();
				}

				if (e.which == 8) {
					scope.$apply(attrs.deleteTag);
				}
			});

			element.bind('keyup', function(e) {
				var key = e.which;

				// Tab or Enter pressed 
				if (key == 9 || key == 13) {
					e.preventDefault();
					scope.$apply(attrs.newTag);
				}
			});
		}
	}
});
var cell1;
function generate(){
	itemGroupNameInput = document.getElementById("itemGroupNameInput").value;
	if(itemGroupNameInput != "" && arrRam != "")
	{

    var newTable=document.getElementById('result');
    var row=newTable.insertRow(-1);
    cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
	var cell5=row.insertCell(4);
	var cell6=row.insertCell(5);
	var cell7=row.insertCell(6);
	var cell8=row.insertCell(7);

    cell1.innerHTML=" <textarea type='text' style='width:190px; height:35px; overflow-y:hidden;' class='form-control'></textarea>";
    cell2.innerHTML="<input type='text' style='width:150px;' class='form-control'>";
    cell3.innerHTML="<input type='text' style='width:150px;' class='form-control'>";
	cell4.innerHTML="<input type='text' style='width:150px;' class='form-control'>";
	cell5.innerHTML="<input type='text' style='width:150px;' class='form-control'>";
	cell6.innerHTML="<input type='text' style='width:150px;' class='form-control'>";
	cell7.innerHTML="<input type='text' style='width:150px;' class='form-control'>";
	cell8.innerHTML="<input type='text' style='width:150px;' class='form-control'>";  
	}

}

var X;


$(document).ready(function(){
	$(".generateBtn").click (function(){
		itemGroupNameInput = document.getElementById("itemGroupNameInput").value;
		if(itemGroupNameInput != "")
		{
		
		
		for(var i = 0 ; i <= arrRam.length-1 ; i++){
			if(arrProcessor == "" && arrDisk == "" &arrSsd == "")
			cell1.innerHTML="<textarea type='text' style='width:220px; font-size:12px; height:35px; overflow-y:hidden;' class='form-control'>"+ itemGroupNameInput + '-' + arrRam[i] + "</textarea>";

			for(var j = 0 ; j <= arrProcessor.length-1 ; j++){
				if(arrDisk == "" && arrSsd == "")
				cell1.innerHTML="<textarea type='text' style='width:220px; font-size:12px; height:35px; overflow-y:hidden;' class='form-control'>"+ itemGroupNameInput + '-' + arrRam[i] + '/' + arrProcessor[j] +"</textarea>";

				for(var k = 0 ; k <= arrDisk.length-1 ; k++){
					if(arrSsd == "")
					cell1.innerHTML="<textarea type='text' style='width:220px; font-size:12px; height:35px; overflow-y:hidden;' class='form-control'>"+ itemGroupNameInput + '-' + arrRam[i] + '/' + arrProcessor[j]+'/'+arrDisk[k] +"</textarea>";
					
					for(var l = 0 ; l<=arrSsd.length-1 ; l++){
						
					itemGroupNameInput = document.getElementById("itemGroupNameInput").value;
					X = itemGroupNameInput + '-' + arrRam[i] + '/' + arrProcessor[j] + '/' +arrDisk[k] + '/' +arrSsd[l];

					cell1.innerHTML="<textarea type='text' style='width:220px; font-size:12px; height:35px; overflow-y:hidden;' class='form-control'>"+ itemGroupNameInput + '-' + arrRam[i] + '/' + arrProcessor[j] + '/' +arrDisk[k] + '/' +arrSsd[l] +"</textarea>";
					
					if(i == arrRam.length-1 && j==arrProcessor.length-1 && k == arrDisk.length-1 && l == arrSsd.length-1){
					break;
					}
					generate()
				    }

				}
			}
		}
	     }

		else{
			window.alert("Please Enter Item Group Name");
		}
	})
});
