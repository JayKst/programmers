// https://school.programmers.co.kr/learn/courses/30/lessons/147355
function solution(t, p) {
    var answer = 0;

    for(var i=0; i<t.length- p.length+1; i++){
        if(Number(t.substr(i,p.length)) <= Number(p)){
            answer++;
        }
    }

    return answer;
}