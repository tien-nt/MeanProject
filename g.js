const arr = ['NodeJS','Angular','Express','Mean'];
arr.push('PHP');//them dau
arr.unshift('PHP');//them cuoi
arr.pop();//xoa dau
arr.shift();//xoa cuoi
arr.splice(1,2);//xoa giua

arr.splice(1,0,'Android','iOS');//them giua 

console.log(arr);