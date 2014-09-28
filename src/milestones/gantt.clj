(ns milestones.gantt
  (:import 
    (org.jfree.chart JFreeChart ChartFactory ChartUtilities)
    (org.jfree.data.general DefaultPieDataset PieDataset)
    (org.jfree.data.xy XYDataset XYSeries XYSeriesCollection)
    (java.util Calendar Date)
    (java.io File)
    (org.jfree.chart.ChartFactory)
    (org.jfree.chart.ChartPanel)
    (org.jfree.chart.JFreeChart)
    (org.jfree.data.category IntervalCategoryDataset)
    (org.jfree.data.gantt Task TaskSeries TaskSeriesCollection)
    (org.jfree.data.time SimpleTimePeriod)
    (org.jfree.ui.ApplicationFrame)
    (org.jfree.ui.RefineryUtilities)))

(defn createChart [dataset]
  (let [chart (ChartFactory/createGanttChart 
                "your schedule !" ;  // chart title
		            "Task"      ;     // domain axis label
		            "Date";              // range axis label
		            dataset;             // data
		            true;                // include legend
		            true;               // tooltips
		            false ;              // urls
                )]
    chart
    ))


(defn date [start-date days-to-add]
  (let [calendar (Calendar/getInstance)]
        (.set calendar 
          (.getYear start-date) 
          (.getMonth start-date)
          (.getDay start-date))
        (.add calendar (Calendar/DATE) days-to-add)
        (.getTime calendar)))


 (defn createDataSet [tasks]
   (let [s1 (new TaskSeries "")
         collection (new TaskSeriesCollection)
         current-date (new Date)
         ]
     
     (doseq [[k v] tasks] 
       (if (nil? (v :begin)) false 
         (.add s1 (new Task (str (v :task-name) " : " (v :resource-id))
            (new SimpleTimePeriod 
            (date current-date (v :begin)) ;; ustiliser (v :begin)
            (date current-date (+ (v :begin) (v :duration))) ;; utiliser (v :duration)
            )))
         )
       )
         
     (.add collection s1)
     collection))

(def alphanumeric "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890")

(defn get-random-id [length]
  (apply str (repeatedly length #(rand-nth alphanumeric))))

(defn main [tasks] 
  (let [dataset (createDataSet tasks)
        chart (createChart dataset)
        file-name (get-random-id 8)
        ]
    (ChartUtilities/saveChartAsPNG (new File (str "resources/public/" file-name ".png")), chart, 800, 800)
    (str file-name ".png")
  ))