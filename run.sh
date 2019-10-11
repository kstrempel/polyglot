#declare -a langs=("ada" "c" "csharp" "elixir" "fsharp" "go" "java" "julia" "kotlin" "lua" "nim" "nodejs" "ocaml" "pascal" "perl" "php" "python" "r" "ruby" "rust" "scala" "groovy" "clojure" "bash")

declare -a langs=("ada" "c" "csharp" "elixir" "fsharp" "go" "java" "julia" "kotlin" "lua" "nim" "nodejs" "ocaml" "pascal" "perl" "php" "python" "r" "ruby" "rust" "scala" "clojure")
programm="iterations"

mkdir -p logs
rm -f logs/*

for lang in "${langs[@]}"
do
    echo $lang
    case $lang in
    ada)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/ada:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot bash -c "gnat make $programm.adb -f -o $programm && ./$programm" > logs/$lang.log
        ;;

    c)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/c:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot bash -c "gcc $programm.c -o $programm &&  ./$programm" > logs/$lang.log
        ;;

    clojure)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/clojure:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot clojure $programm.clj > logs/$lang.log
        ;;

    csharp)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/csharp:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot bash -c "mcs $programm.cs && mono $programm.exe" > logs/$lang.log
        ;;

    elixir)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/elixir:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot elixir $programm.ex > logs/$lang.log
        ;;

    fsharp)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/fsharp:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot bash -c "fsharpc $programm.fs && mono $programm.exe" > logs/$lang.log
        ;;

    go)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/go:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot go run $programm.go > logs/$lang.log
        ;;

    groovy)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/groovy:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot groovy $programm.groovy > logs/$lang.log
        ;;

    java)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/java:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot bash -c "javac $programm.java && java $programm" > logs/$lang.log
        ;;

    julia)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/julia:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot julia $programm.jl > logs/$lang.log
        ;;

    kotlin)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/kotlin:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot bash -c "kotlinc $programm.kt -include-runtime -d $programm.jar && kotlin -classpath $programm.jar $programm" > logs/$lang.log
        ;;

    lua)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/lua:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot lua $programm.lua > logs/$lang.log
        ;;

    nim)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/nim:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot nim c -r --verbosity:0 --hints:off $programm.nim > logs/$lang.log
        ;;

    nodejs)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/nodejs:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot node $programm.js > logs/$lang.log
        ;;

    ocaml)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/ocaml:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot ocaml $programm.ml > logs/$lang.log
        ;;

    pascal)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/pascal:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot bash -c "pc $programm.p && ./$programm" > logs/$lang.log
        ;;

    perl)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/perl:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot perl $programm.pl > logs/$lang.log
        ;;

    php)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/php:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot php $programm.php > logs/$lang.log
        ;;

    python)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/python:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot python $programm.py > logs/$lang.log
        ;;

    r)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/r:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot Rscript $programm.R > logs/$lang.log
        ;;

    ruby)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/ruby:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot ruby $programm.rb > logs/$lang.log
        ;;

    rust)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/rust:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot bash -c "rustc $programm.rs && ./$programm" > logs/$lang.log
        ;;

    scala)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/scala:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot scala $programm.scala > logs/$lang.log
        ;;

    bash)
        docker run -it --rm --name running-polyglot -v $PWD/Languages/bash:/usr/src/app -w /usr/src/app alexvaitsekhovich/polyglot bash $programm.sh > logs/$lang.log
        ;;

    *)
        echo "unknown language"
        ;;
esac
done


# cleanup 
rm -f Languages/ada/$programm && rm -f Languages/ada/$programm.ali && rm -f Languages/ada/$programm.o
rm -f Languages/c/$programm
rm -f $programm.exe
rm -f $programm.exe
rm -f Languages/java/$programm.class
rm -f Languages/kotlin/$programm.jar
rm -f Languages/nim/$programm && rm -rf Languages/nim/src
rm -f Languages/pascal/$programm && rm -f Languages/pascal/$programm.o
rm -f Languages/rust/$programm
