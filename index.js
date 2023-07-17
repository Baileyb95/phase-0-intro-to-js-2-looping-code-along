// Code your solutions in this file
function writeCards(nameArray, birthday){
   let empty = []
for (let i=0; i < nameArray.length; i++) {
          empty.push(`Thank you, ${nameArray[i]}, for the wonderful ${birthday} gift!`);

        }
      
        return empty;
      }
function countDown(){
    let countDown = 0;
while (countDown < 11) {
  console.log(countDown++);
}
}