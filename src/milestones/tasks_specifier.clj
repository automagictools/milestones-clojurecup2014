;;; The natural tasks specifier,
;;; Basically a set of instaparse grammars to analyze
;;; task specifications written in "almost" natural english

(ns milestones.tasks_specifier
  (:require [instaparse.core :as insta]))

;;task description grammar
(def description-grammar 
    "description = [<description-prefix>]<whitespace> task-id <whitespace> [<description-postfix>] <whitespace> task-name | 
    [description-prefix] <whitespace> task-name <whitespace> [<description-postfix>] <whitespace> task-id
    <description-prefix> = 'Task'|'task'|'The task'
    <description-postfix> = 'is to'
    task-id = number
    task-name = word (<whitespace> word)*")

;;resource grammar
(def resource-grammar 
    "resource =[<resource-prefix>] <whitespace>* resource-name
    <resource-prefix> = ('this task is' | 'the task is' | 'it is')? <whitespace>*
         ( 'by' | 'resource' | 'assigned to' | 'attributed to' | 'awarded to' | 'allocated to')
    resource-name = word (<whitespace>* word)*")

;;priority grammar
(def priority-grammar 
    "priority=[<priority-prefix>] <whitespace>* priority-value  <whitespace>* [<priority-postfix>]
    <priority-prefix> = (  'priority' | 'with' | 'with a' | 'priority is' | 'task priority is' | 'it has a')?
    <priority-postfix> = ['priority' <whitespace>*]
    priority-value = number | 'high' | 'medium' | 'low' | 'normal'")

;;Task duration grammar
(def duration-grammar 
    "duration=[<duration-prefix>] <whitespace>* duration-value <whitespace>* duration-unity  <whitespace>?
    <duration-prefix> = [( 'duration' | (('it' + <whitespace>)? ('lasts' | 'takes' | 'will last'))) + <whitespace>]
    duration-value = number
    duration-unity = ['d'|'days'|'w'|'weeks'|'m'|'months']")

;;Predecessors tasks grammar
(def predecessors-grammar 
    "predecessors=[<predecessors-prefix> <whitespace>*]  pred [<whitespace>* ('&'|'and')? <whitespace>* pred  <whitespace>*]* [<predecessors-postfix>]
     <predecessors-prefix> = (('it' <whitespace>*)? ('depends on tasks below' | 'depends on tasks'))
     <predecessors-postfix> = 'must be done before' | 'must be completed before' | 'must be ended before'
    pred = number")

;;milestone Grammar 
(def milestone-grammar 
    "milestone=[<milestone-prefix> <whitespace>]  milestone [<whitespace> <milestone-postfix>]
    <milestone-prefix> = 'the milestone is'
    <milestone-postfix> = 'is a milestone'
    milestone = number")

(def tasks-specifier
  (insta/parser
    (str "S = task <whitespace>* (<point> <whitespace>* task)*
     <point> = #'\\.+'
     <word> = #'[a-zA-Z]+'
     <number> = #'[0-9]+'
     <whitespace> = #'\\s+'
     <constraint-sep> = <whitespace>* #'\\,+' <whitespace>*"
     description-grammar 
     resource-grammar
     duration-grammar
     priority-grammar
     "task = description <constraint-sep>
            resource <constraint-sep>
            duration <constraint-sep>
            priority <constraint-sep>")))