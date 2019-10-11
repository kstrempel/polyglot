# polyglot
Test speed for different programming languages.

Used docker image: 
[alexvaitsekhovich/polyglot](https://cloud.docker.com/repository/docker/alexvaitsekhovich/polyglot)

1. In _run.sh_ define the list of languages you want to test:
```
declare -a langs (<your list>)
```

2. In _run.sh_ define the name of the programm that will be executed for every language:
```
programm="<your script>"
```
Expected file extensions are lsited below.


3. Start with:

```
sh run.sh
```


File extensions for languages:

language | File extension
------------ | -------------
ADA | .adb
C | .c
Clojure | .clj
C# | .cs
Elixir | .ex
F# | .fs
Go | .go
Groovy | .groovy
Java | .java
Julia | .jl
Kotlin | .kt
Lua | .lua
Nim | .nim
Node.js | .js
OCaml | .ml
Pascal | .p
Perl | .pl
PHP | .php
Python | .py
R | .R
Ruby | .rb
Rust | .rs
Scala | .scala
 
![Speed test result](https://github.com/alexvaitsekhovich/polyglot/blob/master/img/Speed.png)
