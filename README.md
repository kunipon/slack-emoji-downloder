# slack-emoji-downloder

## 概要
* slackに登録してある絵文字を一括ダウンロードします。

## setup

### 環境変数
* 以下の２つが必要です。

```
SLACK_TOKEN=xoxp-xxxxxxxxxxxxxxxxxxxxxx-yyyyyyyyyyyyyy
DEST_PATH=path/to/images
```

### （オプション）vscodeの起動設定参考
* 環境変数をファイル化して。。

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "プログラムの起動",
            "program": "${workspaceFolder}/index.js",
            "envFile": "${workspaceFolder}/.env",
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen"
        }
    ]
}
```