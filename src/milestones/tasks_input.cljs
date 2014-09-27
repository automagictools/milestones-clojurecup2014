(ns milestones.tasks_input
  (:require [ajax.core :refer [GET POST]]))

(defn handler [response]
  (.log js/console (str response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(POST "/send-message"
        {:params {:message "Hello World"
                  :user    "Bob"}
         :handler handler
         :error-handler error-handler})