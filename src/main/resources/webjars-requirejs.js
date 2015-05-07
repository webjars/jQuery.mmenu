requirejs.config({
	paths: { "mmemu": webjars.path("mmemu", "js/mmemu") },
	shim: { "mmemu": [ "jquery" ] }
});
