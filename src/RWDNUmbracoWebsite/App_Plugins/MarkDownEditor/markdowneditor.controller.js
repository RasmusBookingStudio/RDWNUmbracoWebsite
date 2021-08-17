angular.module("umbraco")
    .controller("My.MarkdownEditorController",
        // inject umbracos assetsService
        function ($scope, assetsService, $timeout, editorService) {
        
            if($scope.model.value === null || $scope.model.value === ""){
                $scope.model.value = $scope.model.config.defaultValue;
            }
            
            // tell the assetsService to load the markdown.editor libs from the markdown editors
            // plugin folder
            assetsService
                    .load([
                        "~/App_Plugins/MarkDownEditor/lib/pagedown-bootstrap/Markdown.Converter.js",
                        "~/App_Plugins/MarkDownEditor/lib/pagedown-bootstrap/Markdown.Sanitizer.js",
                        "~/App_Plugins/MarkDownEditor/lib/pagedown-bootstrap/Markdown.Editor.js"
                    ])
                    .then(function () {
                        // this function will execute when all dependencies have loaded
                        $timeout(function () {
                            var converter2 = new Markdown.Converter();
                            var editor2 = new Markdown.Editor(converter2, "-" + $scope.model.alias);
                            editor2.run();
                                
                            // subscribe to the image dialog clicks
                            editor2.hooks.set("insertImageDialog", function (callback) {
                                // here we can intercept our own dialog handling
                                var mediaPicker = {
                                    disableFolderSelect: true,
                                    submit: function (model) {
                                        var selectedImagePath = model.selection[0].image;
                                        callback(selectedImagePath);
                                        editorService.close();
                                    },
                                    close: function () {
                                        editorService.close();
                                    }
                                };
                                editorService.mediaPicker(mediaPicker);
                                
                                return true; // tell the editor that we'll take care of getting the image url
                            });
                        });
                    });
                
            // load the separate css for the editor to avoid it blocking our Javascript loading
            assetsService.loadCss("~/App_Plugins/MarkDownEditor/lib/pagedown-bootstrap/Markdown.Editor.less");    
        });
