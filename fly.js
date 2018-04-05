//FLY 0.1.1

var fly = [];

/*  LOADS A SCRIPT SOURCE APPEND HEAD
*   id= id for script tag
*   script= url source 
*/
fly.importScript = function (_src_,_id_)
{
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src  =  _src_;
  s.id   =  (_id_||'');
  $("head").append(s);
}

/*  LOADS A SCRIPT SOURCE APPEND BODY
*   id= id for script tag
*   script= url source 
*/
fly.endScript = function (_src_,_id_)
{
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src  =  _src_;
  s.id   =  (_id_||'');
  $("body").append(s);
}

/*  LOADS A SCRIPT SOURCE
*   id= id for script tag to check
*   script= url source 
*/
fly.checkNload = function (id,script)
{
  if (!$('#'+id).length) {
  fly.endScript(script,id)
	}
}
