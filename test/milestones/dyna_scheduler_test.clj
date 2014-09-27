

(ns milestones.dyna-scheduler-test
  (:require [milestones.dyna-scheduler :refer :all])
  (:use expectations))

(def tasks {
             1 {:task-name "A description about this task"
               :resource-id 2
               :duration 5
               :priority 1
               :predecessors [2 5 6]}

             2 {:task-name "A description about this task"
              :resource-id 1
              :duration 4
              :priority 1
              :predecessors [1 3 4]}

             3 {:task-name "A description about this task"
              :resource-id 4
              :duration 3
              :priority 1
              :predecessors [2 4]}

             4 {:task-name "A description about this task"
                :resource-id 4
                :priority 1
                :predecessors [2 4]}
             })

(def output-schedule [{:task-id 1 :time 1 :resource-id 1}
                      {:task-id 1 :time 2 :resource-id 1}
                      {:task-id 3 :time 1 :resource-id 1}
                      {:task-id 3 :time 2 :resource-id 1}
                      {:task-id 3 :time 3 :resource-id 1}])

(expect  [3 3 3  2 2 2 2 1 1 1 1 1] (gen-work-flow tasks [3 2 1]) )
(expect 1 (task-completion-rate tasks output-schedule 3))
(expect 2/5 (task-completion-rate tasks output-schedule 1))
(expect 0 (task-completion-rate tasks output-schedule 2))
(expect 1 (task-completion-rate tasks output-schedule 4))