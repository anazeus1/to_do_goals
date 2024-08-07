export class Activity {
  id: number ;
  name: string ;
  begin: Date;
  end: Date ;
  description: string ;
  color: string;

  constructor(id:number,name:string, begin:Date,end:Date,description:string,color:string) {
    this.id=id;
    this.name=name;

    this.begin =begin;
    this.end = end;
    this.description=description;
    this.color=color;

  }
  duration(){
    return (this.end.getTime()-this.begin.getTime())/(1000*60);//from millisecond to minutes

  }

}
