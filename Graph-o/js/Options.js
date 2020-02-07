var Options = function(){
  this.options = globals.options;
  this.gridOpt = $("#grid-opt");

  this.gridIsChecked = function(){
    return this.gridOpt.prop('checked');
  };
};
