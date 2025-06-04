self.addEventListener("install", (e) => {
  console.log("Service Worker installed");
});

self.addEventListener("fetch", function (event) {
  // キャッシュなどの処理を省略した最小構成
});
