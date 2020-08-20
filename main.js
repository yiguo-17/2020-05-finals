const makeRunOn = function(str){
  const words = str.split('. ')
  return words.join(', ')
}
const totalScore = function(arr,mul,bon){
  let sum = 0;
  for (const obj of arr){
    sum += obj.score;
  }
  if(mul===undefined){return sum}
  if(mul !== undefined && bon ===undefined){ return sum*mul} 
  if (bon !== undefined){return sum*mul + bon}
}

const nightOwls = function(arr){
  const result = [];
  for (const person of arr){
    if(person.asleep === false && person.localTime >=100 && person.localTime <= 400){
      result.push(person)
    }
  }
  return result
}

const getToBed = function(arr){
  const result = [];
  for (const person of arr){
    if(person.asleep === false && person.localTime >=100 && person.localTime <= 400){
      result.push({name:person.name,localTime: person.localTime,asleep:true})
    }
    else(result.push(person))
  }
  return result
}

const findIndices = function(arr,fun){
  const result = [];
  for (let i=0;i<arr.length;i++){
    if (fun(arr[i])){result.push(i)}
  }
  return result
}

const Faqtory =function(){
  return{
    questions:[],
    addQuestion:function(str){
      const question = {text:str,
      id:this.questions.length,
    answered:false}
    this.questions.push(question)
    },
    answerQuestion:function(num,str){
      for (const question of this.questions){
        if (question.id === num && question.answered ===false){
          question.answer = str;
          question.answered = true
        }
      }
    }
  }
}




if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
