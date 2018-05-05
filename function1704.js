function inSoChan()
{
    for(var i=0;i<=100;i++)
        if(i%2==0)
            console.log(i)
}
function inSole()
{
    for(var i=0;i<=100;i++)
        if(i%2!=0)
            console.log(i)
}
function inSoChia3Du1()
{
    for(var i=0;i<=100;i++)
        if(i%3==1)
            console.log(i)
}
function inSoChinhPhuong()
{
    for(var i=0;i<=100;i++)
        if(Math.sqrt(i)%1===0)
            console.log(i)
}


//=======================Fix==========================//
function inSoChinhPhuong()
{
    for(let i=0;i<=100;i+=1)console.log(i*i);
}
function inSoChia3Du1()
{
    for(let i=0;i<=100;i+=3)console.log(i);
}
//======================other way=========================//
function inSo(fn){
    for(let i=0;i<=100;i++){
        const dk=fn(i);
        if(dk)console.log(i);
    }
}
//inSo(x=>x%2===0);