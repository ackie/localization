YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "AbstractLoader",
        "EventDispatcher",
        "LoadQueue",
        "Log",
        "TagLoader",
        "XHRLoader"
    ],
    "modules": [
        "PreloadJS"
    ],
    "allModules": [
        {
            "displayName": "PreloadJS",
            "name": "PreloadJS",
            "description": "PreloadJSはHTMLアプリケーション用にコンテンツをプリロードする一貫した方法を提供します。\nプリローディングはXHRだけでなくHTMLタグを使用して行うことも可能です。\n\nXHRは進捗と完了のイベントのサポートが比較的よいため、PreloadJSはデフォルトの動作としてXHRを使用してコンテンツのロードを試みます。\n<b>しかし、クロスドメイン問題のため、依然としてタグベースのローディングの方が望ましいケースもあります。</b>\nいくつかのコンテンツ（プレーンテキスト、web audio）はXHRを必要とし、他のいくつか（HTML audio）はタグを必要とします。\n可能な限り自動的にどちらを使用するか判定されます。\n\nPreloadJSは現在すべてのモダンブラウザをサポートしており、最も古いブラウザもサポートできるよう我々はベストを尽くして来ました。\n特定のOS/ブラウザの組み合わせで問題を発見したら、是非http://community.createjs.com/を訪れ報告してください。\n\n<h4>はじめに</h4>\nはじめに、{{#crossLink \"LoadQueue\"}}{{/crossLink}}を確認してください。\nファイルロードと結果処理の方法について簡単な概要説明があります。\n\n<h4>例</h4>\n     var queue = new createjs.LoadQueue();\n     queue.installPlugin(createjs.Sound);\n     queue.addEventListener(\"complete\", handleComplete);\n     queue.loadFile({id:\"sound\", src:\"http://path/to/sound.mp3\"});\n     queue.loadManifest([\n         {id: \"myImage\", src:\"path/to/myImage.jpg\"}\n     ]);\n     function handleComplete() {\n         createjs.Sound.play(\"sound\");\n         var image = queue.getResult(\"myImage\");\n         document.body.appendChild(image);\n     }\n\n<b>プラグインに関する重要な注意:</b>\nプラグインはアイテムがキューに追加される<i>前</i>にインストールする必要があります。\nそうしなければ、ロードが始まってなかったとしても実行されません。\nプラグインの機能はアイテムがLoadQueに追加されたときに実行されます。"
        }
    ]
} };
});