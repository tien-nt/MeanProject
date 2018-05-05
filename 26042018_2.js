class PhepTinh{
    constructor(soA,soB,tenPhepTinh){
        this.soA=soA;
        this.soB=soB;
        this.tenPhepTinh=tenPhepTinh;

    }//CONG TRU NHAN CHIA
    getResultString(){
        let result='';
        switch(this.tenPhepTinh){
            case '+':
                result= 'A + B ='+this.soA+this.soB;
                break;
            case '-':
                result=   'A - B ='+this.soA-this.soB;
                break;
            case 'x':
                result =  'A x B ='+this.soA*this.soB;
                break;
            case ':':
                result =  'A : B ='+this.soA/this.soB;
                break;

        }
        return result;
    }
    getSign()
    {
        if(this.tenPhepTinh =='CONG') return '+';
        if(this.tenPhepTinh =='TRU') return '-';
        if(this.tenPhepTinh =='NHAN') return '*';
        return '/';
    }
    getResultString2(){
        const express = `${this.soA} ${this.getSign} ${this.soB}`;
        return '$express' =`${eval(express)}`;
    }
}
//let tinh = new PhepTinh()
//tinh.getResultString(4,5,'+');
//const pt = new PhepTinh(1,5,'TRU');
//console.log(pt.getResultString());