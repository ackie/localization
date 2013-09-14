YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "CSSPlugin",
        "Ease",
        "EventDispatcher",
        "MotionGuidePlugin",
        "SamplePlugin",
        "Timeline",
        "Tween"
    ],
    "modules": [
        "TweenJS"
    ],
    "allModules": [
        {
            "displayName": "TweenJS",
            "name": "TweenJS",
            "description": "TweenJS Javascriptライブラリは、シンプルですがパワフルなトゥイーンのインタフェースを提供します。\nこれは、オブジェクトの数値プロパティやCSSのスタイルプロパティ間のトゥイーンをサポートし、トゥイーンやアクションを\n一緒にチェーンすることで、複雑なシーケンスを作成することを可能にします。\n\n<h4>単純なトゥイーン</h4>\nこのトゥイーンは、ターゲットのalphaプロパティを0から1まで１秒でトゥイーンし、関数<code>onComplete</code>を呼びます。\n\n\t    target.alpha = 0;\n\t    Tween.get(target).to({alpha:1}, 1000).call(onComplete);\n\t    function onComplete() {\n\t    \t//Tween complete\n\t    }\n\n<h4>チェーン可能なトゥイーン</h4> \nこのトゥイーンは、0.5秒待ち、ターゲットのalphaプロパティを1秒で0にトゥイーンし、そのvisibleをfalseにします。\nそして、関数<code>onComplete</code>を呼びます。\n\n\t    target.alpha = 1;\n\t    Tween.get(target).wait(500).to({alpha:0, visible:false}, 1000).call(onComplete);\n\t    function onComplete() {\n\t    \t//Tween complete\n\t    }"
        }
    ]
} };
});