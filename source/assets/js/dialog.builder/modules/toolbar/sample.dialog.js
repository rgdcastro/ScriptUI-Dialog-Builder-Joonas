
// Load sample dialog
$('#toolbar .sample-dialog').on("click", function() {
	
	var content =
		'<div id="reset-box">' +
			'<h2>Sample Dialog.jsx</h2>' +
			'<span class="text">Are you sure you want to <strong>replace</strong> <br>the current dialog with a sample?</span>' +
			'<span class="yes" data-enter>Load Sample</span>' +
			'<span class="no">Cancel</span>' +
		'</div>';
	
	modal.init( content );
	
	var resetBox = $('#reset-box');
	
	resetBox.find('.yes').on('click', function() {
		
		modal.remove();
		setTimeout(function() {
			
			var data = '{"activeId":1,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"text":"Import Multiple PDF pages","preferredSize":[0,0],"margins":16,"orientation":"row","spacing":10,"alignChildren":["left","top"]}},"item-1":{"id":1,"type":"Panel","parentId":20,"style":{"text":"Page Selection","preferredSize":[0,205],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-2":{"id":2,"type":"StaticText","parentId":1,"style":{"text":"Import PDF Pages:","justify":"left","preferredSize":[0,0],"alignment":null}},"item-3":{"id":3,"type":"EditText","parentId":6,"style":{"text":"1","preferredSize":[60,0],"alignment":null}},"item-4":{"id":4,"type":"StaticText","parentId":6,"style":{"text":"thru","justify":"left","preferredSize":[0,0],"alignment":null}},"item-5":{"id":5,"type":"EditText","parentId":6,"style":{"text":"1","preferredSize":[60,0],"alignment":null}},"item-6":{"id":6,"type":"Group","parentId":1,"style":{"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-7":{"id":7,"type":"StaticText","parentId":1,"style":{"text":"Start Placing on Doc Page:","justify":"left","preferredSize":[0,0],"alignment":null}},"item-8":{"id":8,"type":"Checkbox","parentId":1,"style":{"text":"Reverse Page Order","preferredSize":[0,0],"alignment":null}},"item-9":{"id":9,"type":"Panel","parentId":20,"style":{"text":"Sizing Options","preferredSize":[0,160],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-10":{"id":10,"type":"Checkbox","parentId":9,"style":{"text":"Fit to Page","preferredSize":[0,0],"alignment":null}},"item-11":{"id":11,"type":"Checkbox","parentId":9,"style":{"text":"Keep Proportions","preferredSize":[0,0],"alignment":null}},"item-12":{"id":12,"type":"Checkbox","parentId":9,"style":{"text":"Bleed the Fit Page","preferredSize":[0,0],"alignment":null,"checked":true}},"item-13":{"id":13,"type":"StaticText","parentId":9,"style":{"text":"Scale of Imported Page","justify":"left","preferredSize":[0,0],"alignment":null}},"item-14":{"id":14,"type":"Group","parentId":9,"style":{"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-15":{"id":15,"type":"EditText","parentId":14,"style":{"text":"100","preferredSize":[40,0],"alignment":null}},"item-16":{"id":16,"type":"StaticText","parentId":14,"style":{"text":"Y%:","justify":"left","preferredSize":[0,0],"alignment":null}},"item-17":{"id":17,"type":"EditText","parentId":14,"style":{"text":"100","preferredSize":[40,0],"alignment":null}},"item-18":{"id":18,"type":"StaticText","parentId":14,"style":{"text":"X%:","justify":"left","preferredSize":[0,0],"alignment":null}},"item-19":{"id":19,"type":"Group","parentId":0,"style":{"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null}},"item-20":{"id":20,"type":"Group","parentId":0,"style":{"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null}},"item-21":{"id":21,"type":"Panel","parentId":19,"style":{"text":"Positioning Options","preferredSize":[0,205],"margins":10,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null}},"item-22":{"id":22,"type":"StaticText","parentId":21,"style":{"text":"Position on Page Aligned From:","justify":"left","preferredSize":[0,0],"alignment":null}},"item-23":{"id":23,"type":"DropDownList","parentId":21,"style":{"text":"","listItems":"Top Left, Top Center, Top Right, Center Left, Center, Center Right, Bottom Left, Bottom Center, Bottom Right, -, Top - Relative to spine,  Center  - Relative to spine,  Right  - Relative to spine","preferredSize":[0,0],"alignment":null,"selection":0}},"item-24":{"id":24,"type":"DropDownList","parentId":21,"style":{"text":"Rotation:","listItems":"0, 90, 180, 270","preferredSize":[0,0],"alignment":null,"selection":0}},"item-25":{"id":25,"type":"StaticText","parentId":21,"style":{"text":"Offset by:","justify":"left","preferredSize":[0,0],"alignment":null}},"item-26":{"id":26,"type":"Group","parentId":21,"style":{"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-27":{"id":27,"type":"StaticText","parentId":26,"style":{"text":"X:","justify":"left","preferredSize":[0,0],"alignment":null}},"item-28":{"id":28,"type":"EditText","parentId":26,"style":{"text":"0","preferredSize":[40,0],"alignment":null}},"item-29":{"id":29,"type":"StaticText","parentId":26,"style":{"text":"Y:","justify":"left","preferredSize":[0,0],"alignment":null}},"item-30":{"id":30,"type":"EditText","parentId":26,"style":{"text":"0","preferredSize":[40,0],"alignment":null}},"item-31":{"id":31,"type":"Panel","parentId":19,"style":{"text":"Placement Options","preferredSize":[0,160],"margins":10,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null}},"item-32":{"id":32,"type":"DropDownList","parentId":31,"style":{"text":"Crop to:","listItems":"Art, Crop, Trim, Bleed, Media","preferredSize":[0,0],"alignment":null,"selection":0}},"item-33":{"id":33,"type":"Checkbox","parentId":31,"style":{"text":"Place Pages on a New Layer","preferredSize":[0,0],"alignment":null}},"item-34":{"id":34,"type":"Checkbox","parentId":31,"style":{"text":"Ignore Font and Image Errors","preferredSize":[0,0],"alignment":null}},"item-35":{"id":35,"type":"Checkbox","parentId":31,"style":{"text":"Transparent PDF Background","preferredSize":[0,0],"alignment":null,"checked":true}},"item-36":{"id":36,"type":"Group","parentId":0,"style":{"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null}},"item-37":{"id":37,"type":"Button","parentId":36,"style":{"text":"OK","justify":"center","preferredSize":[0,0],"alignment":null}},"item-38":{"id":38,"type":"Button","parentId":36,"style":{"text":"Cancel","justify":"center","preferredSize":[0,0],"alignment":null}},"item-39":{"id":39,"type":"EditText","parentId":1,"style":{"text":"1","preferredSize":[60,0],"alignment":null}},"item-40":{"id":40,"type":"Checkbox","parentId":1,"style":{"text":"Map to Doc Pages","preferredSize":[0,0],"alignment":null}}},"order":[0,20,1,2,6,3,4,5,8,7,39,40,9,10,11,12,13,14,18,15,16,17,19,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]}';
			
			local_storage.remove('dialog');
			local_storage.set('dialog', JSON.parse( data ) );
			modal.remove();
			loadingScreen.init( null, function() {
				location.reload();
			});
			
		},300);
		
	});
	resetBox.find('.no').on('click', function() {
		modal.remove();
	});
	
});
