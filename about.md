---
layout: page
title: "关于"
permalink: about.html
image: /public/images/sierra.jpg
color: '#f44336'
sequence: 9
---


{% comment %}
  This inserts the "about" photo and text from `_config.yml`.
  You can edit it there (jekyll needs restart!) or remove it and provide your own photo/text.
  Don't forget to add the `me` class to the photo, like this: `![alt](src){:.me}`.
{% endcomment %}

{% if site.author.photo %}
  ![{{site.author.name}}]({{site.author.photo}}){:.me}
{% endif %}


我是<u>青蛙鸽子</u>。本科学电的，目前在微波方向，祈祷能够按时毕业。

## 更加了解我

几乎不玩微博，也没有几个国外大站的账号，所以只能看看我的[GitHub](https://github.com/zyong0904)。

## 为什么要写这个博客？

一直想找地方写点东西，在博客平台上写过，自己折腾过建站，写来写去还是GitHub Page更省心。

本站使用 GitHub Page 和 Jekyll 进行搭建，用了饮冰先生的[主题](https://github.com/myanbin/myanbin.github.io)稍加修改。

## 版权说明

本站所有内容均采用[署名 4.0 国际（CC BY 4.0）](http://creativecommons.org/licenses/by/4.0/deed.zh)创作共享协议。通俗地讲，只要在使用时署名，那么使用者可以对本站所有内容进行转载、节选、二次创作，并且允许商业性使用。

## 联系我

我的微信 `zy5446608` ,也可以发邮件到 [{{site.author.email}}](mailto:{{site.author.email}}) 与我联系。