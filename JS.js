
// function getRandom(n)
// {
    
//     return Math.floor(Math.random() * n) + 1;
// }

// console.log(getRandom(3));
    // console.log(Math.random());
    // console.log(Math.round(1.4));
    // console.log(Math.ceil(1.1));
    // console.log(Math.floor(1.9));
// function render(n,m)
// {
//     for(var i =1 ;i<=n;i++)
//     {
//         var str='';
//         for(var j=1;j<=m;j++)
//         {
//             const soBuocNgang = Math.abs(j-6);
//             const soBuocDoc = Math.abs(i-6);
//             const dk = soBuocDoc+soBuocNgang  <= 5;
//             str +=(dk?'*':' ');
//         }
//         console.log(str);
//     }
    
// }
///=================Lesson 1==================////
function ShowResult(a, b)
{
    console.log("A="+a);
      console.log("B="+b);
      console.log("A+B="+ (a+b));
      console.log("A-B="+ (a-b));
      console.log("AxB="+ (a*b));
      console.log("A/B="+ (a/b));
      console.log("A%B="+ (a%b));
     return a;
}
function ShowResult(n)
{
    let r='';
    for(var i=0;i<=n;i++)
    {
        if(i%154==0)
            r+=i+',';
    }
    return r;
}
function renderByNumber(n,m)
{
   
    for(let i=1;i<=n;i++)
    {
        let str='';
        for(let j=1;j<=m;j++)
        {
            if( i>=j)
            {
                str+=j;
            }
        }
        console.log(str);
    }
}
function renderByNumber1(n,m)
{
    for(let i=1;i<=n;i++)
    {
        let str='';
        for(let j=i;j<=m;j++)
        {
            var ngang = Math.abs(i-1);
            var doc = Math.abs(j-1);
            if(i<=j)
                str+=i;
        }
        console.log(str);
    }
}
console.log(renderByNumber1(8,8));
