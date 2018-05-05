function VeHinh(n,fn){
    for(let i=1;i<=n;i++){
        let str='';
        for(let j=1;j<=n;j++)
        {
            const dk = fn(i,j,n);
            str +=(dk?'*': ' ');
        }
        console.log(str);
    }
}
function veHinh4(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= n; j++) {
            const trungTam = (n + 1) / 2;
            //const soBuocDoc = Math.abs(i - trungTam);
            //const soBuocNgang = Math.abs(j - trungTam);
            const dk = soBuocDoc + soBuocNgang == trungTam - 1;
            str += (dk ? '*' : ' ');
        }
        console.log(str);
    }
}
veHinh4(5);
//VeHinh(10,(i,j,n)=>i>=j);
//VeHinh(10,(i,j,n)=>i>=j);

function VeHinh(n,fn,fnSocot)
{
    const soCot = fnSocot
}