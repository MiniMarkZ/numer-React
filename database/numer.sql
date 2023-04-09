ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

CREATE DATABASE numer;

use numer;

CREATE TABLE Sample (
    id int not null,
    sample int not null,
    method varchar(255),
    info varchar(255),
    primary key (id)
);


insert into Sample
value (1, 1, "general",  '{"f(x)":"x^2 - 7", "XL":0, "XR":4, "X":1, "X1":1, "X0":0 }'),
    (2, 2, "general", '{"f(x)":"x - cos(x)", "XL":0, "XR":1, "X":1, "X1":1, "X0":0 }'),
    (3, 3, "general", '{"f(x)":"x^3 + 2x^2 + 10x - 20", "XL":1, "XR":2, "X":1, "X1":1, "X0":0}'),
    (4, 1, "fixpoint", '{"f(x)":"x^2 - x - 1", "g(x)":"1 + 1/x", "X":1}'),
    (5, 2, "fixpoint", '{"f(x)":"x - cos(x)", "g(x)":"cos(x)", "X":0}'),
    (6, 3, "fixpoint", '{"f(x)":"sin(x) - x^2", "g(x)":"sin(x)/x", "X":1}');

CREATE TABLE equation (
  id int(11) NOT NULL,
  method text NOT NULL,
  Equation text NOT NULL,
  XL int(11) DEFAULT NULL,
  XR int(11) DEFAULT NULL,
  X0 int(11) DEFAULT NULL,
  X1 int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `equation`
--

INSERT INTO equation (`id`, `method`, `Equation`, `XL`, `XR`, `X0`, `X1`) VALUES
(1, 'Bisection', '(x^4)-13', 0, 5, NULL, NULL),
(2, 'Bisection', '(x^4)-13', 5, 10, NULL, NULL),
(3, 'FalsePosition', '(x^4)-13', 0, 5, NULL, NULL),
(4, 'FalsePosition', '(x^4)-13', 5, 10, NULL, NULL),
(5, 'Onepoint', '(((2*x)+5)/2)^(1/3)', NULL, NULL, 5, NULL),
(6, 'Newtonraphson', '(x^4)-13', NULL, NULL, 5, NULL),
(7, 'Secant', '(x^4)-13', NULL, NULL, 5, 10);

-- --------------------------------------------------------

--
-- Table structure for table `regression`
--

CREATE TABLE `regression` (
  `id` int(11) NOT NULL,
  `method` text NOT NULL,
  `M` int(11) NOT NULL,
  `N` int(11) NOT NULL,
  `X` text NOT NULL,
  `array` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `regression`
--

INSERT INTO `regression` (`id`, `method`, `M`, `N`, `X`, `array`) VALUES
(1, 'polynomial', 2, 9, '65', '[[10,5],[15,9],[20,15],[30,18],[40,22],[50,30],[60,35],[70,38],[80,43]]'),
(2, 'polynomial', 3, 9, '12,14', '[[10,5,7],[15,9,10],[20,15,13],[30,18,15],[40,22,16],[50,30,19],[60,35,21],[70,38,25],[80,43,29]]'),
(3, 'polynomial', 4, 9, '32,24,18', '[[10,5,7,8],[15,9,10,11],[20,15,13,14],[30,18,15,16],[40,22,16,20],[50,30,19,22],[60,35,21,25],[70,38,25,28],[80,43,29,31]]');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
