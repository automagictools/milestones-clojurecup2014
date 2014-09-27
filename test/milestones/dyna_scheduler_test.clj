

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
              :predecessors [2 4]}})

(expect  [3 3 3  2 2 2 2 1 1 1 1 1] (gen-work-flow tasks [3 2 1]) )