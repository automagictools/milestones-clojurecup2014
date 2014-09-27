;;; The Dynamic Scheduler,
;;; Using core.async channels, it will plan tasks.
;;; input is a seq of tasks like:
;;;           1 {
;;;            :task-name "A description about this task"
;;;                   ;the resource that'll be booked doing the task
;;;            :resource-id 3
;;;                    ;the duration that this resource will be booked during this task
;;;            :duration 3
;;;                     ;priority : less is higher priority
;;;            :priority 1
;;;                     ;predecessors : if they are not complete, task cannot be fired.
;;;             predecessors [2 4]}

(ns milestones.dyna-scheduler
  (:require  [clojure.set]
    [clojure.core.async
              :as async
              :refer [chan go alts! alts!! >! >!! <!! <! close! timeout]]))

(defn gen-work-flow
  "Given all tasks description vector [{:task-id, ...},{}]
  and a work-queue [1 2 3],... we generate named task units
  with as many unit of each task as its duration :
  [1 1 1 2 2 3 3 3]"
  [tasks work-queue]
  (->> work-queue
       (mapcat  #(let [the-id %
                       the-task (get tasks %) ]
                  (repeat (:duration the-task) the-id)))
  (vec)))

(defn task-completion-rate
  "Given tasks description, a schedule-output
  [{:task-id 1 :resource-id 1 :time 2}
  {:task-id 1 :resource-id 1 :time 2} ...]
  and a task-id, returns the completion-rate,i.e,
  nb of units in output / duration of task  "
  [tasks
   output-schedule
   the-task-id]
  (let [the-task (get tasks the-task-id)
        duration (the-task :duration)
        nb-task-units-in-output (count
                                  (filter #(= (% :task-id ) the-task-id )
                                          output-schedule ))]
    (try (/ nb-task-units-in-output duration)
         (catch Exception e 1))))
