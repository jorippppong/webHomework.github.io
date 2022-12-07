//id값을 찾아서 대입한다.
const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 12;
const select=[0,0,0,0,0,0,0,0,0,0,0,0];

//문제에 대한 선택을 버튼으로 만들어 준다.
//answerBox 라는 div 태그 안에 answer라는 버튼이 만들어 진 것이다.
function addAnswer(answerText, qIdx, idx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');  //answer를 버튼의 속성으로 만들어 준다.
    answer.classList.add('answerList');
    //속성 추가
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');

    a.appendChild(answer);
    answer.innerHTML=answerText;

    answer.addEventListener("click", function(){
        var children = document.querySelectorAll('.answerList');
        //버튼 하나만 클릭하면 다른 버튼은 비활성화 되고, 모든 버튼이 사라지도록 설정
        for (let i=0; i<children.length; i++){
            children[i].disabled = true;  //버튼이 비활성화 되도록 만든다.
            children[i].style.display = 'none';
        }
        //선택한 답안의 type에 해당하는 index를 증가시켜준다.
        //결과 도출 알고리즘
        var target = qnaList[qIdx].a[idx].type;
        for(let i=0; i<target.length; i++){
            select[target[i]] +=1;
        }
        goNext(++qIdx);
    }, false);
}

//value가 가장 높은 것이 맨 앞에 오도록 정렬 해준다.
//사용자가 어떤 type을 가장 많이 선택했는지 확인 가능
function calResult(){
    var result = select.indexOf(Math.max(...select));
    return result;
}

//결과를 출력
function setResult(){
    let point = calResult(); //최대 많이 나온 type

    //type이름
    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = infoList[point].name;
    //type image
    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    
    var imageURL = "image\\image-"+point+".jpg";
    resultImg.src = imageURL;
    resultImg.alt =point;
    resultImg.classList.add('img-fluid');

    imgDiv.appendChild(resultImg);
}

//12번째(마지막 문제가 끝난 후 결과 창으로 이동하는 함수)
function goResult(){
    qna.style.display="none";
    result.style.display = "block";
    setResult();
}

//문제가 넘어가게 해주는 함수
function goNext(qIdx){
    //마지막 문제가 끝나면 결과를 보여주는 창으로 넘어간다.
    if (qIdx == endPoint){
        goResult();
        return;
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
    //statusBar 가 질문의 숫자 만큼 채워진다.
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint)*(qIdx+1)+'%';
}

//문제에 따라 넘어가게 해줌
function begin(){
    main.style.display="none"
    qna.style.display="block"
    let qIdx =0;
    goNext(qIdx);
}


//링크 이동
function link(){
    let point = calResult();
    switch(point){
        case 0:
            window.location.href='https://watcha.com/watch/mP5mgmO';
            break;
        case 1:
            window.location.href='https://www.tving.com/contents/M000368670';
            break;
        case 2:
            window.location.href='https://www.wavve.com/player/vod?programid=M_T72108G';
            break;
        case 3:
            window.location.href='https://www.tving.com/contents/P001613931';
            break;
        case 4:
            window.location.href='https://www.tving.com/contents/P000941062';
            break;
        case 5:
            window.location.href='https://www.wavve.com/player/vod?programid=S01_V2000011536';
            break;
        case 6:
            window.location.href='https://www.wavve.com/player/vod?programid=M_T70028G';
            break;
        case 7:
            window.location.href='https://www.youtube.com/watch?v=9wUKhEgnllc';
            break;
        case 8:
            window.location.href='https://www.youtube.com/watch?v=FRilMXZqNhA';
            break;
        case 9:
            window.location.href='https://www.youtube.com/watch?v=BzYnNdJhZQw';
            break;
        case 10:
            window.location.href='https://comic.naver.com/webtoon/list?titleId=697685';
            break;
        case 11:
            window.location.href='https://comic.naver.com/webtoon/list?titleId=747269';
            break;
    }
}