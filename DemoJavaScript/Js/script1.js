// console.log(document.body.textContent) lấy văn bản trong thẻ body
//console.log(document.body.innerText) tính năng tương tự như trên
// console.log(document.innerHTML) tính toán
//console.log(document.link[index]) lấy ra thẻ chứa link tại vị trí index
//console.log(document.get) lấy ra các phương thức
//console.log(document.query ) lấy ra các bộ chọn
        /*  let mainElement = document.getElementById('main');
        console.log(mainElement.attributes);
        if(!mainElement.hasAttribute('style')){
            mainElement.setAttribute('style', 'color:red')
        }
        console.log(mainElement.textContent);
        mainElement.children[0].textContent = "Text update";
        console.log(mainElement.children[0].textContent);

        let childToRemove = mainElement.children[0];
        mainElement.removeChild(childToRemove);
        console.log(mainElement.innerHTML); */

//Các bước xử lý sự kiện
// Bước 1:  - Xác định các phần tử tham chiếu mà chúng ta sẽ  tác động

let btnSearch = document.getElementById('btnSearch')
let txtfruit = document.getElementById('txtfruit')

// GIa su CSDL của chúng ta đã biết ( dùng mảng để minh họa)
let fruits = ['orange','lemon', 'apple']
// Bước 2: - XỬ lý sự kiện
btnSearch.addEventListener('click', doSomething)

//Hàm xử lý
function doSomething(){
    let fruit = txtfruit.values;
    if(fruit == ''   ){
        alert("please enter the Fruit search")
    }else{
        if(!fruits.inclues(fruit)){
            pNotify.textContent = 'The' + fruit + "not exist";
            pNotify.style = 'color: red; background-color: yellow';
        }else{
            pNotify.textContent = fruit;
            ingView.src = 'images/'+ fruit + '.jpg';
        }
    }
}

