KindEditor.plugin('gongshi', function(K) {
        var editor = this, name = 'gongshi';
       
        // 点击公式图标时执行
        editor.clickToolbar(name, function() {
                window.keditor = editor;
                if(window.frames.length == 1){
                    console.log("add")
                   $("#editor-container").append('<iframe id="editor" src="./kityformula/index.html"></iframe>')
                } else{
                    console.log("show")
                }
                $("#editor-container").show()
        });
});

