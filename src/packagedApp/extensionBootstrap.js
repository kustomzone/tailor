(function(){
    require(["brackets", "utils/ExtensionLoader"], function(brackets, extensionLoader){
        
        var paths = {
            "text" : "../../thirdparty/text/text",
            "i18n" : "../../thirdparty/i18n/i18n",
            "hgn"  : "../../thirdparty/hgn",
            "hogan": "../../thirdparty/hogan"
        };

        {{#extensions}}
        extensionLoader.loadExtension("{{name}}", { baseUrl: "{{baseUrl}}", paths: paths}, "main");
        {{/extensions}}
    });
})();