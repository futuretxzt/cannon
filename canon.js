class Canon{
constructor(x,y,w,h,angle){
this.x=x
this.y=y
this.w=w
this.h=h
this.angle=angle
this.canonImage=loadImage("assets/canon.png")
this.canonBase=loadImage("assets/cannonBase.png")
}
display(){
    push ()
    imageMode(CENTER)
    image (this.canonImage,this.x,this.y,this.w,this.h)
    pop ()
    image(this.canonBase,70,20,200,200)
    noFill ()
}
}