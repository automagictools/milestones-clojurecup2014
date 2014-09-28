(ns milestones.tasks_input
  (:require [ajax.core :refer [GET POST]]
            ; [clojure.browser.repl :as repl]
            )
  (:use [domina :only [by-id value remove-class! add-class!]]
        [domina.events :only [listen!]]))
(defn handler [response]
  (if-let [x (= (response "response") "success")]
    (remove-class! (by-id "submit-tasks") "disabled")
    (add-class! (by-id "submit-tasks") "disabled")))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(def tasks "Task 1 is to design tasks specifier, assigned to ibtissem, lasts 2 days, priority low, depends on tasks 1 2")

(defn interractive-handler []
  (POST "/check-tasks"
         {:params {:tasks (value (by-id "tasks-input"))}
          :handler handler
          :error-handler error-handler
          :format :json
          :response-format :json
          ;:keywords? true
          }))

(domina.events/listen! (by-id "tasks-input") :keyup (fn [evt] (interractive-handler)))

(domina.events/listen! (by-id "tasks-input") :change (fn [evt] (interractive-handler)))

(domina.events/listen! (by-id "tasks-save") :click (fn [evt] (interractive-handler)))

