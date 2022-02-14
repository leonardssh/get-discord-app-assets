# get-discord-app-assets

Get discord application's assets in case you don't have them on your PC (this is also the reason why I made this script)

I came across this issue [iCrawl/discord-vscode #1403](https://github.com/iCrawl/discord-vscode/issues/1403) and I really found it interesting, but then I realized that I don't have the assets on my pc anymore, and so this script appeared, maybe it will help you too.

Usage:
> Install packages
```sh
> pnpm i
```
> Change the `APPLICATION_ID`, `ASSET_SIZE`, `ASSET_FORMAT` and run:
```sh
node ./index.js
```

If everything has been set up properly, all application assets should download automatically, in the setted format and size.

👍
