// https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {

    var completionCopy = completion.splice(0);
    var participantCopy = participant.splice(0);
    completionCopy.sort();
    participantCopy.sort();

    for(var i=0; i<participantCopy.length; i++){
        if(participantCopy[i] === completionCopy[i]){
            continue;
        }
        else{
            return participantCopy[i];
        }
    }
}