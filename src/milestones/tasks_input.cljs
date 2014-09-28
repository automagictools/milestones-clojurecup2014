(ns milestones.tasks_input
  (:require [ajax.core :refer [GET POST]]
            [dommy.utils :as utils]
            [dommy.core :as dommy]
            ; [clojure.browser.repl :as repl]
            )
  (:use-macros
    [dommy.macros :only [node sel sel1]])
  )

(defn render-syntax-error 
  [failure]
  (str "<p class='error'>" (failure "error") "</p>"
       "<p class='error'>" (failure "error") "^</p>"
       ))

(defn handler [response]
  "Ajax POST handler to display an interractive results"
  (if-let [x (= (response "response") "error")]
    (let [failure (response "failure") div-resuts (sel1 :#interractive-results)]
      (dommy/add-attr! (sel1 :#tasks-save) :disabled)
      (dommy/add-class! (sel1 :#tasks-save) :disabled)
      (dommy/remove-class! div-resuts :alert-success)
      (dommy/set-html! div-resuts (render-syntax-error  (failure "error"))))
    (let [div-resuts (sel1 :#interractive-results)]      
      (dommy/remove-attr! (sel1 :#tasks-save) :disabled)
      (dommy/add-class! div-resuts :alert-success)
      (dommy/add-class! (sel1 :#tasks-save) :enabled)
      (dommy/set-html! div-resuts "<i class='icon-checked'></i> Correct syntax !"))))


(defn save-handler [response]
  "Form submit handler"
  (if-let [x (= (response "response") "error")]
    (if-let [y (= (response "error") "syntax")]
      (handler response)
	      (let [error (response "failure") div-resuts (sel1 :#interractive-results)]
         (dommy/add-attr! (sel1 :#tasks-save) :disabled)
         (dommy/add-class! (sel1 :#tasks-save) :disabled)
         (dommy/remove-class! div-resuts :alert-success)
         (dommy/add-class! div-resuts :alert-error)
         (dommy/set-html! div-resuts "<i class='icon-remove'></i> Error occured !")))
    (let [div-resuts (sel1 :#interractive-results)]
      (dommy/remove-attr! (sel1 :#tasks-save) :disabled)
      (dommy/add-class! div-resuts :alert-success)
      (dommy/add-class! (sel1 :#tasks-save) :enabled)
      (dommy/set-html! div-resuts "<i class='icon-checked'></i> Tasks saved !"))))

(defn error-handler [{:keys [status status-text]}]
  "Ajax error handler"
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn interractive-handler []
  (POST "/check-tasks"
         {:params {:tasks (dommy/value (sel1 :#tasks-input))}
          :handler handler
          :error-handler error-handler
          :format :json
          :response-format :json}))

(defn save-tasks []
  (POST "/save-tasks"
         {:params {:tasks (dommy/value (sel1 :#tasks-input))}
          :handler save-handler
          :error-handler error-handler
          :format :json
          :response-format :json}))

(dommy/listen! (sel1 :#tasks-save)
                :click save-tasks)

;(dommy/listen! (sel1 :#tasks-input)
;                :change interractive-handler)

(dommy/listen! (sel1 :#tasks-input)
                :input interractive-handler)

;