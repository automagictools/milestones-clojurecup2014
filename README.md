
![MileStones Logo][milestones-logo]
[milestones-logo]: ./resources/public/milestones-logo.png

The intelligent Tasks Scheduler by tnteam - Clojure Cup 2014
=========================================================================

Introduction
------------

This is MileStones, a tiny tasks scheduler who draws -ONLY-
inspiration from [TaskJuggler](http://www.taskjuggler.org), in that
that it takes a description of tasks, that must satisfy a set
constraints (resources, predecessors) and computes "best schedule",
that he eventually draws as a GANTT chart. Algorithms, data structures
and all are our inception. We only think of Taskjuggler as a set of
guidelines of what, and what should not,be done. It means also that
our scheduler is by no means even as half as power as theirs, but we
are thinking to opensource the conept, put the project in Github and
see how far wa can take it.

At the heart of this project come two interesting modules :

- The "Dynamic Scheduler", trying to find best schedule for your
  tasks, using an interesting dynamic approach based on simulating
  days of work flowing through core.async channels (more detail in a
  second). The tweaking over the performances of the algorithm occurs
  in this module, through the use of higher order function (mainly a
  reordering work units through a resource work queue). For Clojure
  Cup 2014, we are ordering tasks by trying to complete those with
  higher priorities and shorter duration first. Actually, it resembles
  a lot what processors do to schedule tasks (spanning them over
  quanta of time (or ticks), except that it is way simpler and does
  not allow for preemption by default (if resource begins a task, he
  must finish it... much like linux kernel system call). You
  can use this scheduler for other applications than project planning:
  work load simulating, traffic planning,...
  
- The "Natural Tasks Specifier". Taskjuggler used to use a curly
  braces syntax to describe the tasks (task1 { requires resource1
  takes 2days, etc...}}) though powerful, it required you to write
  real programs and somehow limited its usage and done prejudice to
  its great scheduler. We chose to took a different approach here;
  letting go even the mouse-driven input. We'll let you specify your
  tasks in English (oh but don't use pre-victorian complicated
  English, please), and if you follow some rules, you'll be able
  -maybe one day - to drop in your meeting notes or RFP text into
  MileStones and get a schedule, (then a quote !) for your project.

There's also a module drawing the resulting schedules as GANTT Charts, basically
through the D3/C3 JS Dataviz libraries.

Architecture of the Dynamic Scheduler
----------------------------

## Tasks
The scheduler basically takes tasks specified as maps like so

	{
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
                  :predecessors [2 4]}}

## Processing Steps

Based on these tasks, the scheduler fires a thread maintaining as many
"work queues" as resources, processing tasks at the pace of a timer
(that can be fake or real, simulating time (days) - can be
parametrized)

1. He first determines, per resource, what tasks can be fired(i.e
   whose predecessors became complete, or a new task lands if we ever
   do a dynamic version or whatever further condition - parametrized),
   if there are any non fire-able left.

2. Look at all the tasks not being currently "work-in-progress"(by
   default, we might also include these if our scheduler if
   preemptive). If there were any newly detected fire-able tasks for a
   particular resource, reorder them (i.e tasks not work in progress
   by default) in respect to the reorder function (that is
   parametrized)

   Regenerate the "simulated work flow" : ie, for each task, and in
   respect to the task order derived in the previous step , put in the
   work queue (i.e a vector of "named tasks unit") for each resource a
   vector of as many "named task units" as the duration of the
   relevant task.

3. Consume one "named task unit" from each resource work plan, i.e,
   take one "brick", label it with current tick shown by timer, and
   send it through an unbuffered chan. The schedule is then
   constructed by a process taking from the chan and feeding 
   another vector, the Output Schedule, that will be like so:
   
		[{:time 1 :resource 1 :task 4}
		{:time 1 :resource 2 :task 5}...]


	Per resource, the order of execution is guaranteed as we label
    each task unit by the tick that was at the origin of its diffusion
    in the channel.

Though we can reduce (or even deduce the ending time thanks to
	task duration) the bricks in the output schedule, we preferred to
	keep the fine-grained day by day schedule, as we can change
	specifications in the future, and have users being able to work on
	preemptive tasks (i.e changing between tasks while doing
	them). switching to preemptive mode is just a matter of including
	the "work in progress task" in the reordering process. if so, if
	the reordering decides that one higher order priority task is to
	be done first, the user will have to switch to this new task, and
	that must be found on the schedule. Keeping track of raw data as
	they arrive to the scheduler makes it possible for us to do it.

4. Move to the next tick of the timer, repeat at 1.

## A picture, maybe ?
As the old saying goes, a picture is worth a thousand words. Here you
go for the "Dynamic Scheduler" architecture.

![The Scheduler architecture][sched-archi]
[sched-archi]: ./resources/public/scheduler-schema.png "The Scheduler Architecture"

The Natural Tasks Specifier : How far can we go ?
----------------------------------------------------

Inspired by old text-based Adventure Games, we'd like the user to
specify his project in english.

Using an Instaparse Parser, Our user will have to specify his tasks in
an "almost" natural english, like so:

>"Task 1 is about Delivering Pizza, must be done by rafik, takes 10
>days, depends on tasks 3 & 4 & 10. For task 1 we must create a website, rafik must do that, work done in 5
>days, but only after that tasks 4 & 10 must be complete. Milestone 1
>is when 1 & 10 are complete."

We want to make our little language as natural as possible. If there
is time, we'll try to offer auto completion for the user, who'll
assist him when he is writing this.

As instaparse is about context free grammars, we'll restrict the use
of points "." to delimit tasks, commas "," to delimit the elements of a
task (task id, task description, resource, duration, priority and
predecessors). We have only one special character, the "&", used to
delimit predecessors. If we do not specify priority, the task takes 2,
high priority gives the task a priority of 1, and low priority gives
it the priority 3.

Besides our "almost" natural english, a little more programming-like
syntax can be used to inject tasks to the scheduler.

Further Work and Noteworthy (maybe?)
------------------------------------

The output can be processed to draw the resulting GANTT. Given that
there are API that allow to render the schedule output , you can plug
in whatever rendering format to view our tasks, if you don't like
ours.

One can feed the scheduler another timer function, one that for
instance would spend actual days to advance steps, making milestones a
cool real field project tracking. Though the idea seems silly, why not
trying it if you get it for free?

Note that this design allows for much simpler implementation than the
double recur iterative algorithm, as time-ticking, processing and
constructing a schedule are decoupled as they are running via
independent processes. Of course, this comes at an obvious peformance
cost, but seems to offer advantages like being able to quickly
prototype concepts and algorithms in scheduling.

Besides, this design allows for dynamic tasks injection, as at every
time-tick we look for newly fireable tasks. Maybe a dynamic version
could be considered in further work (definitely no time here!)

We think the "natural tasks specifier" can be used to process tiny
emails or meeting notes in order to issue little project schedules
that may be helpful to generate rapid quotes, for instance.  It is
clear that this is rather a proof of concept than a real full fledged
die-hard and high-performing scheduler. That being said, this is how
we get our requests for quotes all of the time : emails or meeting
notes in simple english. Though The input interface may be limited for
complicated projects scheduling, we feel it might be a good fit for
small web agencies dealing with a great deal of projects where a
rather limited number of tasks are involved. Besides, the
programming-like interface might be more handy for more complicated
use cases.

Hope you enjoy it ! - By tnteam

