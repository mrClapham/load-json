init = function(){
	//alert("HELOOO");

	var jl = new JsonLoader();

	console.log(jl);

	console.log(JsonLoader.LOAD_COMPLETE);

	jl.listen(JsonLoader.LOAD_COMPLETE, function(e){
		console.log("LOADED ", e.detail.data);
	});

    jl.setPath("MKS_FTSE.json");

	
}