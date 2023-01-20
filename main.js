let questions = document.querySelectorAll('.ques');
let answers = document.querySelectorAll('.ans');

questions.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        let index = item;
        let asli_index = 10;
        console.log(index);
        for(let i=0;i<questions.length;i++){
            if(questions[i]===index)
                asli_index = i
        }
        console.log(asli_index);
        questions[asli_index].firstElementChild.classList.toggle('bold');

        answers[asli_index].classList.toggle('ans');
    })
})