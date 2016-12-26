---
layout: article
title: TruthTree
subtitle: "It's about the climb"
bgimage: trees.jpg
permalink: /climb
---

A few climbing tips:
1. Start at the bottom - its hard to start a climb at the top
2. Follow the branches- that's the logical progression
3. Ask us - we're here if you have questions

### Articles
{% for article in site.articles %}
- <a href="{{article.permalink}}">{{article.title}} - {{article.subtitle}}</a>
{% endfor %}