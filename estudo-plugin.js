

(function($) {
  // $ é o jQuery no escopo do plugin
  // Poderia ser qualquer apelido
  $.fn.titulo= function(campeonato){
	    this.append(campeonato);
    return this;
  };
})(jQuery);