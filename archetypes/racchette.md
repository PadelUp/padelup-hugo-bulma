---
title: {{ $term := index ( split .File.Dir "/") 1 }}"{{ replace $term "-" " " | title }}"
description: "This is the description for {{ $term | title }}"
images:
    - "/images/wiki/brands/{{  $term }}.webp"
---
