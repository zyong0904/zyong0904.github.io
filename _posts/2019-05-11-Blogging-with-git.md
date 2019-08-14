---
layout: post
title: '关于这个博客的搭建'
tags: [code]
---
照惯例，第一篇文章分享这个博客的搭建过程。后续会把之前在各个地方零零碎碎写的东西搬运过来，争取能整理出一些成体系的内容。

博客采用了 [Jekyll](https://jekyllrb.com/) 这个静态站点生成工具。只需要写 MarkDown 文件放到`_post`文件夹下，就可以根据模板生成静态网页。博客模板采用了[饮冰先生](https://myanbin.github.io/)的模板，十分感谢。

## 安装流程

```bash
~ $ sudo apt-get install ruby2.6 ruby2.6-dev
~ $ sudo gem install jekyll
# 下载好前面提到的模板到/blog
~ $ cd blog
~/blog $ jekyll serve
# => Now browse to http://127.0.0.1:4000
```

在浏览器打开看一下模板的效果，然后修改模板到自己喜欢的样子。在GitHub新建一个和用户名一样的repo，会自动开通GitHub Pages功能。然后用Git同步就可以了。