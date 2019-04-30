// <!--
// jason tung
// sd pd 7
// K #21: Onions, Bell Peppers, and Celery, Oh My!
// 2019-04-30
// -->

var gender = document.getElementById("hoverable_gender");
var white = document.getElementById("hoverable_white");
var enrollment = document.getElementById("avg_enroll");


jQuery.getJSON("https://raw.githubusercontent.com/stuy-softdev/workshop/master/thluffy/21_js-mfr/2006_-_2012_School_Demographics_and_Accountability_Snapshot.json?token=AH4SWOZPZPEXHEXK2NQX44C42BTIU", function (data) {
    var dlen = data.length;

    var gender_map = data.map(function (a) {
        return a["male_per"];
    });
    // white.innerText = gender_map;
    gender.innerText = String(gender_map.filter(function (a) {
        return a > 50
    }).length / dlen * 100).substring(0, 6) + "%";
    var white_map = data.filter(function (a) {
        return a["white_per"] === Math.max(a["asian_per"], a["black_per"], a["hispanic_per"], a["white_per"]);
    });
    white.innerText = String(white_map.length / dlen * 100).substring(0, 6) + "%";
    // enrollment.innerText = String().substring(0, 6)
    var enrollment_map = data.map(function (a) {
        return a["total_enrollment"];
    });
    var thing=enrollment_map.reduce(function(acc,a){
        return acc + a;
    });
    enrollment.innerText = String(thing/dlen).substring(0, 6)
});
