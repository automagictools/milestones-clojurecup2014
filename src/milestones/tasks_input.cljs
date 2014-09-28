(ns milestones.tasks_input
  (:require [ajax.core :refer [GET POST]]
            [dommy.utils :as utils]
            [dommy.core :as dommy]
            ; [clojure.browser.repl :as repl]
            )
  (:use-macros
    [dommy.macros :only [node sel sel1]])
  )


(defn handler [response]
  ;(if-let [x (= (response "response") "success")]
   ; (remove-class! (by-id "submit-tasks") "disabled")
  ;  (add-class! (by-id "submit-tasks") "disabled"))
  )

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(def tasks "Task 1 is to design tasks specifier, assigned to ibtissem, lasts 2 days, priority low, depends on tasks 1 2")

(.log js/console (sel1 :#tasks-input))

(defn interractive-handler []
  (POST "/check-tasks"
         {:params {:tasks "" ;(value (by-id "tasks-input"))
                                                        }
          :handler handler
          :error-handler error-handler
          :format :json
          :response-format :json
          ;:keywords? true
          }))

;