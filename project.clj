(defproject milestones "0.1.0-SNAPSHOT"
  :description "This is MileStones, the intelligent prject scheduling software, for clojure cup 2014"
  :url "http://milestones.clojurecup.com"
  :license {:name "The BSD 3-Clause License"
              :url "http://opensource.org/licenses/BSD-3-Clause"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/clojurescript "0.0-2356"]
                 [lein-cljsbuild "1.0.3"]
                 [instaparse "1.3.4"]
                 [http-kit "2.1.18"]
                 [compojure "1.1.9"]
                 [ring/ring-json "0.3.1"]
                 [cheshire "5.3.1"]
                 [ring/ring-json "0.3.1"]
                 [com.taoensso/timbre "3.3.1"]
                 [javax.servlet/servlet-api "2.5"]
                 [expectations "2.0.9"]
                 [om "0.7.3"]]

  :plugins [[lein-ring "0.8.11"]
            [lein-cljsbuild "0.3.2"]]
  
  :profiles {:uberjar {:aot :all}
             :dev {:plugins [[com.cemerick/austin "0.1.5"]
                             [lein-expectations "0.0.8"]]

                   :dependencies [[ring-mock "0.1.5"]]

                   :source-paths ["src/milestones"]

                   :cljsbuild {:builds [
                                         {:source-paths ["src/milestones"]
                                          :compiler     {:output-to     "resources/public/js/milestones.js"
                                                         :optimizations :simple
                                                         :pretty-print  true}}




                   :cljsbuild {:builds [{:source-paths ["src/milestones"]
                                         :compiler {:output-to "resources/public/milestones.js"
                                                    :optimizations :simple
                                                    :pretty-print true}}]}

                                         ]  }}}


  :main milestones.core

  :ring {:handler core/app})

