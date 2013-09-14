YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "AlphaMapFilter",
        "AlphaMaskFilter",
        "Bitmap",
        "BitmapAnimation",
        "BoxBlurFilter",
        "ColorFilter",
        "ColorMatrix",
        "ColorMatrixFilter",
        "Command",
        "Container",
        "DOMElement",
        "DisplayObject",
        "EventDispatcher",
        "Filter",
        "Graphics",
        "Log",
        "Matrix2D",
        "MouseEvent",
        "MovieClip",
        "MovieClipPlugin",
        "Point",
        "Rectangle",
        "Shadow",
        "Shape",
        "SpriteSheet",
        "SpriteSheetBuilder",
        "SpriteSheetUtils",
        "Stage",
        "Text",
        "Ticker",
        "Touch",
        "UID"
    ],
    "modules": [
        "EaselJS"
    ],
    "allModules": [
        {
            "displayName": "EaselJS",
            "name": "EaselJS",
            "description": "EaselJSはcanvas向けに保持されたグラフィックスモードを提供するJavascriptライブラリであり、完全な階層構造の表示リスト、\nコアインタラクションモデル、canvasでの2Dグラフィックスを簡易にするヘルパークラスを含みます。\nEaselJSはリッチなHTML5Canvasにおけるリッチなグラフィックスやインタラクションに役立つソリューションを提供します。\n\n<h4>はじめに</h4>\nEaselをはじめるために、まずはCANVAS要素を覆う{{#crossLink \"Stage\"}}{{/crossLink}}を作成し、{{#crossLink \"DisplayObject\"}}{{/crossLink}}\nインスタンスを子として加えてみましょう。\nEaselJSは以下をサポートしています:\n<ul>\n     <li>{{#crossLink \"Bitmap\"}}{{/crossLink}}による画像表示</li>\n     <li>{{#crossLink \"Shape\"}}{{/crossLink}}と{{#crossLink \"Graphics\"}}{{/crossLink}}によるベクターグラフィックス</li>\n     <li>{{#crossLink \"SpriteSheet\"}}{{/crossLink}}と{{#crossLink \"BitmapAnimation\"}}{{/crossLink}}によるビットマップアニメーション\n     <li>{{#crossLink \"Text\"}}{{/crossLink}}によるシンプルなテキスト</li>\n     <li>{{#crossLink \"Container\"}}{{/crossLink}}による他のDisplayObjectを格納するコンテナ</li>\n     <li>{{#crossLink \"DOMElement\"}}{{/crossLink}}によるHTML DOM要素の制御</li>\n</ul>\n\n全ての表示オブジェクトはステージに子として加えるか、canvasに直接描画できます。\n\n<b>ユーザインタラクション</b><br />\n全てのステージ上（DOMElementを除く）の表示オブジェクトはマウスあるいはタッチで操作したときにイベントを発行します。\nEaselJSは使いやすいドラッグアンドドロップモデルだけでなく、hover、press、それとreleaseイベントをサポートします。\n詳しくは{{#crossLink \"MouseEvent\"}}{{/crossLink}}を参照してください。\n\n<h4>簡単な例</h4>\nこの例ではEaselJSの描画APIを用いて{{#crossLink \"Stage\"}}{{/crossLink}}上に{{#crossLink \"Shape\"}}{{/crossLink}}を生成して配置する方法を説眼します。\n\n\t    //canvasへの参照を渡してステージを作成します。\n\t    stage = new createjs.Stage(\"demoCanvas\");\n\t    //Shape DisplayOBjectを生成します。\n\t    circle = new createjs.Shape();\n\t    circle.graphics.beginFill(\"red\").drawCircle(0, 0, 40);\n\t    //Shapeインスタンスの位置を設定します。\n\t    circle.x = circle.y = 50;\n\t    //表示リストにShapeインスタンスを加えます。\n\t    stage.addChild(circle);\n\t    //ステージの更新により次のフレームを描画します。\n\t    stage.update();\n\n<b>シンプルなアニメーションの例</b><br />\nこの例では、前のデモで作成したシェイプを画面上で動かします。\n\n\t    //ステージの更新により次のフレームを描画します。\n\t    createjs.Ticker.addEventListener(\"tick\", handleTick);\n\n\t    function handleTick() {\n         //円を右に10単位動かします。\n\t    \tcircle.x += 10;\n\t    \t//円を最初の位置に戻します。\n\t    \tif (circle.x > stage.canvas.width) { circle.x = 0; }\n\t    \tstage.update();\n\t    }\n\n<h4>他の特長</h4>\nEaselJSは以下をサポートするように構築されています。\n<ul><li>{{#crossLink \"Shadow\"}}{{/crossLink}}やCompositeOperationといったcanvasの特長</li>\n     <li>{{#crossLink \"Ticker\"}}{{/crossLink}}、オブジェクトが受け取ることのできるグローバルな鼓動</li>\n     <li>{{#crossLink \"ColorMatrixFilter\"}}{{/crossLink}}, {{#crossLink \"AlphaMaskFilter\"}}{{/crossLink}},\n     {{#crossLink \"AlphaMapFilter\"}}{{/crossLink}}, {{#crossLink \"BoxBlurFilter\"}}{{/crossLink}}といったフィルター。\n     詳しくは{{#crossLink \"Filter\"}}{{/crossLink}}を参照してください。</li>\n     <li>簡単にインタラクティブなボタンを作成するための{{#crossLink \"ButtonHelper\"}}{{/crossLink}}ユーティリティ。</li>\n     <li>実行時に{{#crossLink \"SpriteSheet\"}}{{/crossLink}}の機能を構築し管理するのを助ける\n     {{#crossLink \"SpriteSheetUtils\"}}{{/crossLink}}と{{#crossLink \"SpriteSheetBuilder\"}}{{/crossLink}}。\n</ul>"
        }
    ]
} };
});