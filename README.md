# Japanese Jisho

## A Japanese dictionary app

https://japanesejisho.web.app

## Description
A Japanese dictionary web app. Inspired by the Shirabe Jisho and 'Japanese' apps on the IOS app store. This web app primarily leverages the JMdict file, a database file created by Jim Breen and the Electronic Dictionary Research and Development Group (EDRDG). I have designed this app so the user can search the dictionary database with english words in order to find the Japanese equivalent/translation. The app also features: a word list section to browse through words in the database, a kana table for reference to the hiragana and katakana syllabaries, and a kanji list to reference the most common kanji ordered by grade.

## Technology stack
This app is built with the vue framework, firebase realtime database and hosting, javascript, css, and html.

## Future considerations and implementations
This app needs several improvements: top priority is to optimise the database loading and access - i want to perhaps only load the database to client side once and store in a clientside indexDB (looking into using localforage for an indexDB approach), to make the kanji list searchable, add ability to search in with Japanese characters, add better word lists (eg. include JLPT lists).