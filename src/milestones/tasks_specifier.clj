;;; The natural tasks specifier,
;;; Basically a set of instaparse grammars to analyze
;;; task specifications written in "almost" natural english

(ns milestones.tasks_specifier
  (:require [instaparse.core :as insta]))


(def defaults {:duration 1 :predecessors [] :priority 2})

(insta/set-default-output-format! :enlive)
;;task description grammar
(def description-grammar 
    "description = [<description-prefix>]<whitespace> task-id <whitespace> [<description-postfix>] <whitespace> task-name | 
    [description-prefix] <whitespace> task-name <whitespace> [<description-postfix>] <whitespace> task-id
    <description-prefix> = 'For task' | 'Task'|'task'|'The task'
    <description-postfix> = 'is to' | 'is about' | 'we must'
    task-id = number
    task-name = word (<whitespace> word)*")

;;resource grammar
(def resource-grammar 
    "resource =[<resource-prefix>] <whitespace>* resource-name <whitespace>* [<resource-postfix>]
    <resource-prefix> = <whitespace>* 'must be done by' | ('this task is' | 'the task is' | 'it is')? <whitespace>*
         ( 'by' | 'resource' | 'assigned to' | 'attributed to' | 'awarded to' | 'allocated to') <whitespace>*
    <resource-postfix> =  'must do that' 
    resource-name = word (<whitespace>* word)*")

;;priority grammar
(def priority-grammar 
    "priority=[<priority-prefix>] <whitespace>* (number | 'high' | 'medium' | 'low' | 'normal')  <whitespace>* [<priority-postfix>]
    <priority-prefix> = (  'priority' | 'with' | 'with a' | 'priority is' | 'task priority is' | 'it has a')?
    <priority-postfix> = ['priority' <whitespace>*]")

;;Task duration grammar
(def duration-grammar 
    "duration=[<duration-prefix>] <whitespace>* duration-value <whitespace>* duration-unity  <whitespace>?
    <duration-prefix> = 'work done in' | ( [( 'duration' | (('it' + <whitespace>)? ('lasts' | 'takes' | 'will last')))]) <whitespace>*
    duration-value = number
    duration-unity = ['d'|'days'|'w'|'weeks'|'m'|'months']")

;;Predecessors tasks grammar
(def predecessors-grammar 
    "predecessors= <predecessors-prefix> number <whitespace>*  (('&'|<whitespace>*|'and')? number)* <predecessors-postfix>?
     <predecessors-prefix> = <whitespace>* ( ( 'it'? <whitespace>* ('depends on tasks below' | 'depends on tasks') ) |
                             ('its'? 'predecessors' <whitespace>* 'are'?) ) <whitespace>*
     <predecessors-postfix> = <whitespace>* ('must be done before' | 'must be completed before' | 'must be ended before') <whitespace>*")
    
;;milestone Grammar 
(def milestone-grammar 
    "milestone=<milestone-prefix>? <whitespace>*  milestone-id <whitespace>* <milestone-postfix>?
    <milestone-prefix> = 'the milestone is' | 'milestone'
    <milestone-postfix> = 'is a milestone'
    milestone-id = number")

(def tasks-specifier
  (insta/parser
    (str "S = (task | milestone) <whitespace>* (<point> <whitespace>* (task | milestone)?)*
     <point> = #'\\.+'
     <word> = #'[a-zA-Z]+'"
     milestone-grammar
     "<number> = #'[0-9]+'
     <whitespace> = #'\\s+'
     <constraint-sep> = <whitespace>* #'\\,+' <whitespace>*"
     description-grammar 
     resource-grammar
     duration-grammar
     priority-grammar
     predecessors-grammar
     "task = description <constraint-sep>
            resource <constraint-sep>?
            duration? <constraint-sep>?
            priority? <constraint-sep>? predecessors?"
     )))

(defn formatted-tasks-list  [tasks-list]
  tasks-list)

(defn formatted-tasks [tasks]
  (let [tasks-list (tasks-specifier tasks)]
    (insta/failure? {:error tasks-list})
    (formatted-tasks-list tasks-list)))