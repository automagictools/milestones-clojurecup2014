(defproject milestones "0.1.0-SNAPSHOT"
  :description "This is MileStones, the intelligent prject scheduling software, for clojure cup 2014"
  :url "http://milestones.clojurecup.com"
  :license {:name "The BSD 3-Clause License"
              :url "http://opensource.org/licenses/BSD-3-Clause"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/clojurescript "0.0-2356"]
                 [instaparse "1.3.4"]
                 [http-kit "2.1.18"]
                 [compojure "1.1.8"]
                 [ring/ring-json "0.3.1"]
                 [cheshire "5.3.1"]
                 [ring/ring-json "0.3.1"]
                 [com.taoensso/timbre "3.3.1"]
                 [expectations "2.0.9"]]


  :profiles {:dev {:plugins [[com.cemerick/austin "0.1.5"]
                             [lein-expectations "0.0.8"]]

                   :dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring-mock "0.1.5"]]}}

  :main milestones.core
;;:aot :all

  :ring {:handler core/app}
  )

