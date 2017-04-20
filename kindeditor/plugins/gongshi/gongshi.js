KindEditor.plugin('gongshi', function(K) {
        var editor = this, name = 'gongshi';
        // 点击公式图标时执行
        editor.clickToolbar(name, function() {
                $("#edui31_body").click();
                var interval = setInterval(function(){
                	if($("#edui29_body")){
                		console.log("button ready");
                		clearInterval(interval)
                		$("#edui29_body").on('click',function(){
                			console.log("29  click")
                			UE.getEditor('editor').execCommand( "cleardoc" );
                			var timeout = setTimeout(function(){
                				var gongshi = getPlainTxt();
                				editor.insertHtml(gongshi);
								editor.focus();
								setTimeout(timeout)
                			},100)
                		})
                	}
                },100)
        });
});

