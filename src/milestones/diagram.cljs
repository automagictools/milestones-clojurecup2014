(ns milestones.diagram
  (:require [strokes :refer [d3]])
  )


; debug helper
(defn dp [& args]
      (.log js/console (apply str args)) )

(defn gantt []
      ;; dimensions for the diagram
      (let [

          margin {:top 20 :right 40 :bottom 20 :left 150}
          width  (- 960 (:left margin) (:right margin))
          height (- 500 (:top margin)  (:bottom margin))
          FIT_TIME_DOMAIN_MODE "fit"
          FIT_TIME_DOMAIN_MODE "fixed"
          timeDomainMode FIT_TIME_DOMAIN_MODE
          taskTypes []
          taskStatus []

       ])
 )


(defn keyFunction [d]
      (:taskName d)

)
(defn rectTransform [d]
      (str "translate(0," height ")")
 )



