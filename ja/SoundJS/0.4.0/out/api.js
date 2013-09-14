YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "EventDispatcher",
        "FlashPlugin",
        "HTMLAudioPlugin",
        "Log",
        "Sound",
        "SoundInstance",
        "WebAudioPlugin"
    ],
    "modules": [
        "SoundJS"
    ],
    "allModules": [
        {
            "displayName": "SoundJS",
            "name": "SoundJS",
            "description": "SoundJS は web 上における音声再生を管理するためのライブラリです。\n実際には音声関連の実装を抽出したプラグインを介して動作するため、\n\"どんなメカニズムが必要か？\"といった特殊な知識無しに、\nどんなプラットフォーム上でも音声再生が可能です。\n\n\nSoundJS は、{{#crossLink \"Sound\"}}{{/crossLink}} クラスの public API を使います。この API は、以下の機能を提供します。\n<ul><li>プラグインのインストール</li>\n     <li>音声データの登録（と事前読み込み(preload)）</li>\n     <li>音声データの再生</li>\n     <li>再生中の全音声の音量、消音、停止の操作</li>\n</ul>\n\n<b>version 0.4.0 の時点では \"SoundJS\"オブジェクトはバージョン情報の提供しかしません。\nSoundJS の全機能は、\"Sound\" クラスから提供される事に注意して下さい。\n\n<b>音の操作</b><br />\n音声を再生すると \"SoundInstance\" インスタンスが生成されます。このインスタンスを通じて個々の音に対する操作が可能です。\n<ul><li>再生音声の一時停止、一時停止の解除, 停止</li>\n     <li>再生音声の音量、消音、定位の操作</li>\n     <li>音声再生の終了時、ループ時、失敗時のイベントハンドリング</li>\n</ul>\n\n<h4>機能実装例</h4>\n     createjs.Sound.addEventListener(\"loadComplete\", createjs.proxy(this.loadHandler, this));\n     createjs.Sound.registerSound(\"path/to/mySound.mp3|path/to/mySound.ogg\", \"sound\");\n     function loadHandler(event) {\n         // この関数は、各音声データが登録されるたびに呼び出されます。\n         var instance = createjs.Sound.play(\"sound\");  // IDを用いて再生します。sourceを用いる事もできます。\n         instance.addEventListener(\"playComplete\", createjs.proxy(this.handleComplete, this));\n         instance.setVolume(0.5);\n     }"
        }
    ]
} };
});