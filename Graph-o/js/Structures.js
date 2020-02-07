var Queue = function(){
  this.elements = new Array;
  this.last = 0;
  this.index = 0;


  this.isEmpty=function(){
    if(this.elements.length==0){
      return true;
    }
  };

  this.getLength=function(){
    return this.elements.length;
  };

  this.add=function(ob){
    this.elements.push(ob);
    this.length++;
  };

  this.pull=function(){
    if (this.elements.length!=0) {
      var pulled = this.elements[0];
      this.elements.splice(0,1);
      return pulled;
    }
  };

  this.peek=function(){
    if (this.elements.length!=0) {
      var peaked = this.elements[0];
      return peaked;
    }
  };

  this.cycle=function(){
    if(this.index==this.elements.length){
      this.index = 0;
    }
    return this.elements[this.index++];
  };

  this.show=function(){
    if(this.elements.length!=0){
      var str = "{"+this.elements[0];
      for(var i=1;i<this.elements.length;i++){
        str = str+", "+this.elements[i]
      }
      str = str+"}";
      return str;
    }else return "{}";
  };

  this.del = function(index){
    if(this.elements!=null){
      this.elements.splice(index,1);
    }
  };
}


var Stack = function(){
  this.elements = new Array;
  this.index = 0;

  this.push = function (ob) {
    this.elements.push(ob);
    this.index++;
  };
  this.pop = function(){
    return this.elements.pop();
  };

  this.peek = function(){
    return this.elements[this.elements.length-1];
  };

  this.show = function () {
    if(this.elements.length!=0){
      var str = "{"+this.elements[0];
      for(var i=1;i<this.elements.length;i++){
        str = str+", "+this.elements[i]
      }
      str = str+"}";
      return str;
    }else return "{}";
  };
}
