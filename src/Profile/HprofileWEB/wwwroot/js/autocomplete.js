// getting all required elements
const searchWrapper = document.querySelector(".expsearch");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const searchWrapper2 = document.querySelector(".jobsearch");
const inputBox2 = searchWrapper2.querySelector("input");
const suggBox2 = searchWrapper2.querySelector(".autocom-box");
const searchWrapper3 = document.querySelector(".citysearch");
const inputBox3 = searchWrapper3.querySelector("input");
const suggBox3 = searchWrapper3.querySelector(".autocom-box");


inputBox.onkeyup = (e) => {
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        emptyArray = titlessuggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    searchWrapper.classList.remove("active");
    if (inputBox.length != "") {
        $(".invalid-feedback").hide();
    }
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}



inputBox2.onkeyup = (e) => {
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if (userData) {
        emptyArray = strcompanies.filter((data) => {
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper2.classList.add("active"); //show autocomplete box
        showSuggestions2(emptyArray);
        let allList = suggBox2.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select2(this)");
        }
    } else {
        searchWrapper2.classList.remove("active"); //hide autocomplete box
    }
}

function select2(element) {
    let selectData = element.textContent;
    inputBox2.value = selectData;
    searchWrapper2.classList.remove("active");
}

function showSuggestions2(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox2.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    suggBox2.innerHTML = listData;
}

