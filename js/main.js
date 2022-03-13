$(document).ready(function(){
  //declare variables
  var frame = $('iframe'),
      contents = frame.contents(),
      body = contents.find('body'),
      styleTag =  contents
                  .find('head')
                  .append('<style></style>')
                  .children('style');
  //focus to get value
  $('textarea').focus(function(){
    //textarea variable
    var $this = $(this);
    //function for writting
    $this.keyup(function(){
      if($this.attr('id') === 'html'){
        body.html( $this.val() );
      } else if ($this.attr('id') === 'css'){
        styleTag.text( $this.val() );
      }
    });
  });
});
