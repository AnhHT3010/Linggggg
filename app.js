let $answer = document.getElementById('web');
let count = 0;
let $anw2 = document.getElementById('anw2');
let $anw1 = document.getElementById('anw1');
$anw2.addEventListener('click', function(){
    $answer.classList.toggle('reverse');
    alert("E giả vờ à cho chọn lại đó😣😣");
    count++;
    if(count > 5){
        $answer.style.display = "none";
        alert("Có chứ gì? anh đồng ý nhá haha😁😁")
    }
})
$anw1.addEventListener('click', function(){
    alert("Ỏ đọc địa chỉ nhà để đến rước nhá😋😋")
})  
// import helloByChinese from "./hello.js";
// import {helloByThailand, helloByVietnamese} from "./hello.js"
// import * as hihi from "./hello.js";

// hihi.helloByVietnamese();
// helloByThailand();
// helloByVietnamese();