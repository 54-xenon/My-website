

async function callZennApi() {
    const res = await fetch("https://zenn.dev/api/articles?username=appleshinja&order=latest");
    // ブラウザのコンソールに出力
    console.log(res);
}

// 実行
callZennApi();



