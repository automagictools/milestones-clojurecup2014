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

;;; work queue are the tasks to be processed, i.e [ 2 3 1...
;;; work flow are the task units to be fed to the channel , i.e [ 1 1 1 3 3 3...
;;; work in progress are the task that have already been processed by the resource
;;; complete task is a task already totally in the output schedule.
;;; an output schedule is like this :
;;; [{:task-id 1 :time 1 :resource-id 1}
;;; {:task-id 1 :time 2 :resource-id 1}
;;; {:task-id 3 :time 1 :resource-id 1}
;;; {:task-id 3 :time 2 :resource-id 1}
;;; {:task-id 3 :time 3 :resource-id 1}]


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
  [tasks
   work-queue]
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
  nb of units in output / duration of task. if no task in the schedule,
  it's completion is 0. If no duration / 0, competion is 1. "
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

(defn task-complete?
  "returns true if task is complete"
  [tasks
   output-schedule
   the-task-id]
  (= (task-completion-rate tasks
                           output-schedule
                           the-task-id)
     1))

(defn work-in-progress-count
  "work in progress is a task at the peek of the work flow [ 1 1 2 2 2 ...],
  that a resource begun treating went to the channel. in the non preemptive
  mode, we don't involve this task in the reordering.
  However, if the length of this task is equal to the original task duration,
  it has not yet been processed, and then can be preempted"
  [work-flow
   the-task-id]
  (count (take-while #(= the-task-id %)
                     (reverse work-flow))))

(defn task-in-work-in-progress?
  "returns true if task is work-in-progress,
  i.e, is in the head of the work queue, and is not at full length"
  [tasks
   work-flow
   the-task-id]
  (not= (get tasks the-task-id :duration)
        (work-in-progress-count work-flow the-task-id)))






(defn all-predecessors-complete?
  "a predicate that returns true if ak "
  [tasks
   task-id
   output-schedule]

  (let [the-task (get tasks task-id)
        preds (get the-task :predecessors)]

    (every? (partial task-complete?
                     tasks
                     output-schedule)
            preds)))
