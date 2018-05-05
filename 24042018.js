class Point{
    constructor(x,y)
    {
        this.x= x;
        this.y = y;
    }
    getDistance(){
        return Math.sqrt(this.x*this.x+ this.y*this.y);
    }
}
class Line{
    constructor(pointA,pointB){
        this.pointA = new Point(1,2);
        this.pointB = new Point(1,2);
    }
    get Length(){
        const dx = this.pointA.x -this.pointB.x;
        const dy = this.pointA.y -this.pointB.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}
class Triangle{
    constructor(lineA,lineB,lineC){
        this.lineA=lineA;
        this.lineB=lineB;
        this.lineC = lineC;
    }
    getPerimeter(){
        const l1 = new Line(this.pointA,this.pointB);
        const l2 = new Line(this.pointA,this.pointC);
        const l3 = new Line(this.pointC,this.pointB);
        return l1.Length+l2.Length+l3.Length;
    }
}
const pA = new Point(1,0);
const pB = new Point(0,1);
const pC = new Point(0,0);
const lineAC = new Point(1,10);
const TriangleA = new Triangle(pA,pB,pC);

console.log(pB.getDistance());
console.log(lineAC.Length);
console.log(TriangleA.getPerimeter());