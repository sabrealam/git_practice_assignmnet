let check = 23;
let count = 0;
for(let i = 1; i <= check; i++){
    if(check % i == 0){
        count++;
    }
}
if(count == 2){ 
    console.log('Yes Its Prime');
}