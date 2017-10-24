(ns metabase.feature-extraction.math-test
  (:require [expectations :refer :all]
            [metabase.feature-extraction.math :refer :all]))

(expect
  (approximately 5.5 0.1)
  (transduce identity magnitude [1 2 3 4]))
(expect
  0.0
  (transduce identity magnitude []))

(expect
  [1.0
   0.5
   nil
   nil]
  [(cosine-distance [1 0 1] [0 1 0])
   (cosine-distance [1 0 1] [0 1 1])
   (cosine-distance [1 0 1] [0 0 0])
   (cosine-distance [] [])])

(expect
  (approximately 0.39 0.1)
  (chi-squared-distance [0.1 0.2 0.7] [0.5 0.4 0.1]))
(expect
  0
  (chi-squared-distance [] []))

(expect
  [2
   (/ 4)
   nil
   nil]
  [(safe-divide 4 2)
   (safe-divide 4)
   (safe-divide 0)
   (safe-divide 4 0)])

(expect
  [0.23
   1.0
   -0.5
   -5.0
   5.0
   2.0
   nil
   nil
   nil]
  [(growth 123 100)
   (growth -0.1 -0.2)
   (growth -0.4 -0.2)
   (growth -0.4 0.1)
   (growth 0.1 -0.4)
   (growth Long/MAX_VALUE Long/MIN_VALUE)
   (growth 0.1 nil)
   (growth nil 0.5)
   (growth 0.5 0.0)])

(expect
  [true false]
  [(roughly= 30 30.5 0.05)
   (roughly= 130 30.5 0.05)])
