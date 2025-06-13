
import { Quiz } from '@/types';

export const sqlQuizzes: Quiz[] = [
  {
    id: 'sql-beginner',
    title: 'SQL - Beginner',
    description: 'Test your knowledge of basic SQL concepts',
    skillCategory: 'SQL',
    difficulty: 'beginner',
    questions: [
      {
        id: 'sql-basic-1',
        question: 'What does SQL stand for?',
        options: [
          'Structured Queue Language',
          'Structured Query Language',
          'Simple Query Language',
          'Statement Query Language'
        ],
        correctAnswer: 1,
        explanation: 'SQL stands for Structured Query Language.'
      },
      {
        id: 'sql-basic-2',
        question: 'Which SQL statement is used to extract data from a database?',
        options: [
          'GET',
          'SELECT',
          'PULL',
          'EXTRACT'
        ],
        correctAnswer: 1,
        explanation: 'SELECT is the standard command to retrieve data.'
      },
      {
        id: 'sql-basic-3',
        question: 'Which command is used to remove all records from a table?',
        options: [
          'REMOVE',
          'DELETE TABLE',
          'DELETE',
          'DROP'
        ],
        correctAnswer: 2,
        explanation: 'DELETE removes all or selected rows from a table.'
      },
      {
        id: 'sql-basic-4',
        question: 'Which SQL clause is used to filter results?',
        options: [
          'ORDER BY',
          'FROM',
          'WHERE',
          'GROUP BY'
        ],
        correctAnswer: 2,
        explanation: 'WHERE limits rows that match a condition.'
      },
      {
        id: 'sql-basic-5',
        question: 'What is the default order of sorting in SQL using ORDER BY?',
        options: [
          'Random',
          'Ascending',
          'Descending',
          'Numeric'
        ],
        correctAnswer: 1,
        explanation: 'ORDER BY defaults to ascending order.'
      },
      {
        id: 'sql-basic-6',
        question: 'Which of the following is a valid SQL data type?',
        options: [
          'INTEGER',
          'VARCHAR',
          'DATE',
          'All of the above'
        ],
        correctAnswer: 3,
        explanation: 'All are standard SQL data types.'
      },
      {
        id: 'sql-basic-7',
        question: 'Which clause is used to combine rows with the same values?',
        options: [
          'ORDER BY',
          'GROUP BY',
          'FILTER',
          'JOIN'
        ],
        correctAnswer: 1,
        explanation: 'GROUP BY groups rows for aggregation.'
      },
      {
        id: 'sql-basic-8',
        question: 'What does the COUNT() function do?',
        options: [
          'Sums values',
          'Counts rows',
          'Counts columns',
          'Finds averages'
        ],
        correctAnswer: 1,
        explanation: 'COUNT() counts the number of rows returned.'
      },
      {
        id: 'sql-basic-9',
        question: 'Which SQL function is used to find the largest value?',
        options: [
          'MAXIMUM()',
          'MAX()',
          'LARGEST()',
          'TOP()'
        ],
        correctAnswer: 1,
        explanation: 'MAX() returns the maximum value.'
      },
      {
        id: 'sql-basic-10',
        question: 'What does the LIKE operator do?',
        options: [
          'Compares numbers',
          'Matches a pattern',
          'Sorts results',
          'Joins tables'
        ],
        correctAnswer: 1,
        explanation: 'LIKE is used for pattern matching.'
      },
      {
        id: 'sql-basic-11',
        question: 'Which wildcard is used in SQL with LIKE for multiple characters?',
        options: [
          '_ (underscore)',
          '% (percent)',
          '* (asterisk)',
          '? (question mark)'
        ],
        correctAnswer: 1,
        explanation: '% matches any number of characters.'
      },
      {
        id: 'sql-basic-12',
        question: 'How do you rename a column in SQL result?',
        options: [
          'CHANGE',
          'AS',
          'RENAME',
          'UPDATE'
        ],
        correctAnswer: 1,
        explanation: 'AS allows aliasing column names.'
      },
      {
        id: 'sql-basic-13',
        question: 'What does DISTINCT do?',
        options: [
          'Sorts data',
          'Removes duplicates',
          'Joins tables',
          'Drops rows'
        ],
        correctAnswer: 1,
        explanation: 'DISTINCT filters out duplicate values.'
      },
      {
        id: 'sql-basic-14',
        question: 'Which operator is used to check for NULL?',
        options: [
          '= NULL',
          'IS NULL',
          'EQUAL NULL',
          'NULL?'
        ],
        correctAnswer: 1,
        explanation: 'IS NULL is used to check NULL values.'
      },
      {
        id: 'sql-basic-15',
        question: 'Which SQL keyword is used to retrieve unique values?',
        options: [
          'UNIQUE',
          'DISTINCT',
          'ONLY',
          'FIRST'
        ],
        correctAnswer: 1,
        explanation: 'DISTINCT ensures unique values.'
      },
      {
        id: 'sql-basic-16',
        question: 'Which keyword is used to combine two SELECT queries?',
        options: [
          'JOIN',
          'UNION',
          'COMBINE',
          'SELECT+'
        ],
        correctAnswer: 1,
        explanation: 'UNION merges results from two queries.'
      },
      {
        id: 'sql-basic-17',
        question: 'Which command removes a table and its data?',
        options: [
          'DELETE',
          'DROP',
          'ERASE',
          'REMOVE'
        ],
        correctAnswer: 1,
        explanation: 'DROP deletes the entire table.'
      },
      {
        id: 'sql-basic-18',
        question: 'How do you add a new row into a table?',
        options: [
          'ADD',
          'INSERT',
          'CREATE',
          'NEW'
        ],
        correctAnswer: 1,
        explanation: 'INSERT adds new rows.'
      },
      {
        id: 'sql-basic-19',
        question: 'Which SQL command is used to change existing data?',
        options: [
          'EDIT',
          'UPDATE',
          'CHANGE',
          'MODIFY'
        ],
        correctAnswer: 1,
        explanation: 'UPDATE modifies existing records.'
      },
      {
        id: 'sql-basic-20',
        question: 'Which function returns current system date?',
        options: [
          'GETDATE()',
          'SYSDATE()',
          'Depends on the RDBMS',
          'CURDATE()'
        ],
        correctAnswer: 2,
        explanation: 'Syntax varies (e.g., MySQL uses NOW(), Oracle uses SYSDATE).'
      },
      {
        id: 'sql-basic-21',
        question: 'Which keyword ensures a column cannot be NULL?',
        options: [
          'MUST',
          'FIXED',
          'NOT NULL',
          'NONNULL'
        ],
        correctAnswer: 2,
        explanation: 'NOT NULL constraint prevents NULL values.'
      }
    ]
  },
  {
    id: 'sql-intermediate',
    title: 'SQL - Intermediate',
    description: 'Test your intermediate SQL skills',
    skillCategory: 'SQL',
    difficulty: 'intermediate',
    questions: [
      {
        id: 'sql-inter-1',
        question: 'What does the INNER JOIN keyword do in SQL?',
        options: [
          'Combines all rows from both tables',
          'Combines rows with matching values in both tables',
          'Combines unmatched rows only',
          'Only selects from one table'
        ],
        correctAnswer: 1,
        explanation: 'INNER JOIN returns records with matching values in both tables.'
      },
      {
        id: 'sql-inter-2',
        question: 'Which SQL statement is used to change the structure of a table?',
        options: [
          'CHANGE',
          'ALTER',
          'UPDATE',
          'MODIFY'
        ],
        correctAnswer: 1,
        explanation: 'ALTER modifies the table structure.'
      },
      {
        id: 'sql-inter-3',
        question: 'What is the purpose of the HAVING clause?',
        options: [
          'Filters individual rows',
          'Filters grouped data',
          'Joins tables',
          'Changes column names'
        ],
        correctAnswer: 1,
        explanation: 'HAVING is used with GROUP BY to filter aggregated results.'
      },
      {
        id: 'sql-inter-4',
        question: 'Which function returns the average value in SQL?',
        options: [
          'SUM()',
          'TOTAL()',
          'AVG()',
          'MEAN()'
        ],
        correctAnswer: 2,
        explanation: 'AVG() calculates average values.'
      },
      {
        id: 'sql-inter-5',
        question: 'What does the BETWEEN operator do?',
        options: [
          'Finds values that match one of two',
          'Finds values within a range',
          'Joins two tables',
          'Returns NULLs'
        ],
        correctAnswer: 1,
        explanation: 'BETWEEN selects values in a given range.'
      },
      {
        id: 'sql-inter-6',
        question: 'Which clause limits the number of returned rows?',
        options: [
          'SKIP',
          'LIMIT',
          'TOP',
          'MAX'
        ],
        correctAnswer: 1,
        explanation: 'LIMIT restricts row count in the result set (MySQL/PostgreSQL).'
      },
      {
        id: 'sql-inter-7',
        question: 'What is a primary key?',
        options: [
          'Column that stores duplicates',
          'Unique identifier for rows',
          'Foreign key',
          'Auto-increment column only'
        ],
        correctAnswer: 1,
        explanation: 'A primary key uniquely identifies each row.'
      },
      {
        id: 'sql-inter-8',
        question: 'What is a foreign key used for?',
        options: [
          'Uniquely identify a row',
          'Enforce referential integrity',
          'Rename tables',
          'Copy data'
        ],
        correctAnswer: 1,
        explanation: 'Foreign keys link rows across tables.'
      },
      {
        id: 'sql-inter-9',
        question: 'What happens when a primary key is duplicated?',
        options: [
          'It\'s updated',
          'Accepted with a warning',
          'Error is thrown',
          'New column created'
        ],
        correctAnswer: 2,
        explanation: 'Primary keys must be unique.'
      },
      {
        id: 'sql-inter-10',
        question: 'Which keyword is used to sort results in descending order?',
        options: [
          'SORT DESC',
          'ORDER UP',
          'ORDER BY column DESC',
          'DESC BY'
        ],
        correctAnswer: 2,
        explanation: 'ORDER BY column DESC sorts in descending order.'
      },
      {
        id: 'sql-inter-11',
        question: 'Which command gives only unique rows?',
        options: [
          'ORDER BY',
          'SELECT DISTINCT',
          'SELECT UNIQUE',
          'SELECT ONLY'
        ],
        correctAnswer: 1,
        explanation: 'DISTINCT filters out duplicates.'
      },
      {
        id: 'sql-inter-12',
        question: 'What is normalization in SQL?',
        options: [
          'Joining tables',
          'Organizing data to reduce redundancy',
          'Sorting records',
          'Encrypting data'
        ],
        correctAnswer: 1,
        explanation: 'Normalization ensures minimal redundancy.'
      },
      {
        id: 'sql-inter-13',
        question: 'What does SQL injection exploit?',
        options: [
          'Encrypted queries',
          'Unvalidated user input',
          'Server overloads',
          'Poor UI'
        ],
        correctAnswer: 1,
        explanation: 'SQL injection manipulates unvalidated inputs in SQL queries.'
      },
      {
        id: 'sql-inter-14',
        question: 'How can you copy a table structure without data?',
        options: [
          'COPY TABLE',
          'CREATE TABLE new AS SELECT * FROM old WHERE 1=0',
          'SELECT INTO',
          'DUPLICATE TABLE'
        ],
        correctAnswer: 1,
        explanation: 'This syntax copies structure, not data.'
      },
      {
        id: 'sql-inter-15',
        question: 'What is the purpose of a UNIQUE constraint?',
        options: [
          'Allows only NULL values',
          'Ensures no duplicate values',
          'Sets a default value',
          'Links tables'
        ],
        correctAnswer: 1,
        explanation: 'UNIQUE prevents duplicate entries.'
      },
      {
        id: 'sql-inter-16',
        question: 'Which statement removes only table rows, not structure?',
        options: [
          'DROP',
          'DELETE',
          'TRUNCATE',
          'ERASE'
        ],
        correctAnswer: 1,
        explanation: 'DELETE removes rows but keeps the table.'
      },
      {
        id: 'sql-inter-17',
        question: 'How do you add a new column to an existing table?',
        options: [
          'ADD COLUMN',
          'ALTER TABLE ADD COLUMN',
          'APPEND COLUMN',
          'MODIFY TABLE'
        ],
        correctAnswer: 1,
        explanation: 'ALTER TABLE ADD COLUMN is the correct syntax.'
      },
      {
        id: 'sql-inter-18',
        question: 'Which SQL keyword is used to rename a table?',
        options: [
          'ALTER',
          'RENAME',
          'MODIFY',
          'CHANGE'
        ],
        correctAnswer: 1,
        explanation: 'RENAME changes the table name.'
      },
      {
        id: 'sql-inter-19',
        question: 'What is the result of a LEFT JOIN when no match is found?',
        options: [
          'Row is skipped',
          'Duplicate created',
          'NULL values returned',
          'Error'
        ],
        correctAnswer: 2,
        explanation: 'LEFT JOIN includes unmatched rows with NULLs.'
      },
      {
        id: 'sql-inter-20',
        question: 'Which function returns number of non-null entries?',
        options: [
          'SUM()',
          'COUNT(column)',
          'COUNT(*)',
          'AVERAGE()'
        ],
        correctAnswer: 1,
        explanation: 'COUNT(column) counts only non-null values.'
      },
      {
        id: 'sql-inter-21',
        question: 'What keyword checks if a value exists in a list?',
        options: [
          'INCLUDES',
          'IN',
          'EXISTS',
          'AMONG'
        ],
        correctAnswer: 1,
        explanation: 'IN checks if a value matches any in a list.'
      }
    ]
  },
  {
    id: 'sql-advanced',
    title: 'SQL - Advanced',
    description: 'Challenge your advanced SQL knowledge',
    skillCategory: 'SQL',
    difficulty: 'advanced',
    questions: [
      {
        id: 'sql-adv-1',
        question: 'What does the RANK() function do in SQL?',
        options: [
          'Returns the max value',
          'Assigns a rank with gaps in ties',
          'Returns cumulative sum',
          'Calculates percentage'
        ],
        correctAnswer: 1,
        explanation: 'RANK() assigns same rank to ties, skipping the next rank(s).'
      },
      {
        id: 'sql-adv-2',
        question: 'What is the difference between RANK() and DENSE_RANK()?',
        options: [
          'No difference',
          'DENSE_RANK doesn\'t skip ranks',
          'RANK returns higher ranks first',
          'DENSE_RANK is faster'
        ],
        correctAnswer: 1,
        explanation: 'DENSE_RANK assigns consecutive ranks without gaps.'
      },
      {
        id: 'sql-adv-3',
        question: 'What is a CTE in SQL?',
        options: [
          'Conditional Table Expression',
          'Common Table Expression',
          'Current Table Entity',
          'Custom Table Extension'
        ],
        correctAnswer: 1,
        explanation: 'CTE stands for Common Table Expression, used for modular queries.'
      },
      {
        id: 'sql-adv-4',
        question: 'What does the OVER clause enable in SQL?',
        options: [
          'Subqueries',
          'Window functions',
          'Joins',
          'Cursors'
        ],
        correctAnswer: 1,
        explanation: 'OVER defines a window for analytic functions.'
      },
      {
        id: 'sql-adv-5',
        question: 'Which SQL feature is used for recursive queries?',
        options: [
          'Triggers',
          'Recursive CTE',
          'CASE statements',
          'Subquery'
        ],
        correctAnswer: 1,
        explanation: 'Recursive CTEs enable iteration through hierarchical data.'
      },
      {
        id: 'sql-adv-6',
        question: 'What does PARTITION BY do in window functions?',
        options: [
          'Joins tables',
          'Divides data into groups for function application',
          'Filters data',
          'Normalizes data'
        ],
        correctAnswer: 1,
        explanation: 'PARTITION BY breaks result into groups for windowed operations.'
      },
      {
        id: 'sql-adv-7',
        question: 'Which SQL command is used for full-text search in MySQL?',
        options: [
          'CONTAINS()',
          'LIKE',
          'MATCH() AGAINST()',
          'FIND()'
        ],
        correctAnswer: 2,
        explanation: 'MATCH...AGAINST is used for full-text search in MySQL.'
      },
      {
        id: 'sql-adv-8',
        question: 'What does a trigger do in SQL?',
        options: [
          'Encrypts data',
          'Automatically executes on data changes',
          'Indexes data',
          'Creates backups'
        ],
        correctAnswer: 1,
        explanation: 'Triggers execute SQL automatically in response to events.'
      },
      {
        id: 'sql-adv-9',
        question: 'What is an index in SQL?',
        options: [
          'A function',
          'A lookup structure for faster queries',
          'A trigger',
          'A constraint'
        ],
        correctAnswer: 1,
        explanation: 'Indexes speed up SELECT queries by providing fast data access.'
      },
      {
        id: 'sql-adv-10',
        question: 'Which clause is used with analytic functions for row order?',
        options: [
          'WHERE',
          'ORDER BY',
          'LIMIT',
          'HAVING'
        ],
        correctAnswer: 1,
        explanation: 'ORDER BY within OVER clause defines row sequence.'
      },
      {
        id: 'sql-adv-11',
        question: 'What is the purpose of a stored procedure?',
        options: [
          'View data',
          'Encapsulate reusable SQL logic',
          'Sort tables',
          'Only for indexing'
        ],
        correctAnswer: 1,
        explanation: 'Stored procedures allow execution of pre-written logic.'
      },
      {
        id: 'sql-adv-12',
        question: 'Which type of join includes all rows from both tables, filling NULLs for no matches?',
        options: [
          'LEFT JOIN',
          'FULL OUTER JOIN',
          'RIGHT JOIN',
          'INNER JOIN'
        ],
        correctAnswer: 1,
        explanation: 'FULL OUTER JOIN returns unmatched rows from both sides.'
      },
      {
        id: 'sql-adv-13',
        question: 'How can you perform case-insensitive search in PostgreSQL?',
        options: [
          'Using = operator',
          'WHERE LOWER(column) = \'value\'',
          'ILIKE',
          'FIND()'
        ],
        correctAnswer: 2,
        explanation: 'ILIKE allows case-insensitive matching in PostgreSQL.'
      },
      {
        id: 'sql-adv-14',
        question: 'What is a materialized view?',
        options: [
          'Regular view',
          'View with stored results',
          'Non-persistent table',
          'Foreign key'
        ],
        correctAnswer: 1,
        explanation: 'Materialized views store the result physically.'
      },
      {
        id: 'sql-adv-15',
        question: 'Which statement is used to revert a transaction?',
        options: [
          'RESTART',
          'ROLLBACK',
          'UNDO',
          'DELETE'
        ],
        correctAnswer: 1,
        explanation: 'ROLLBACK undoes a transaction.'
      },
      {
        id: 'sql-adv-16',
        question: 'Which command permanently saves a transaction?',
        options: [
          'SAVE',
          'PERSIST',
          'COMMIT',
          'END'
        ],
        correctAnswer: 2,
        explanation: 'COMMIT finalizes changes to the database.'
      },
      {
        id: 'sql-adv-17',
        question: 'Which function returns the current timestamp in SQL?',
        options: [
          'TIME()',
          'CURRENT_TIMESTAMP',
          'NOW_DATE()',
          'TODAY()'
        ],
        correctAnswer: 1,
        explanation: 'CURRENT_TIMESTAMP gives date and time.'
      },
      {
        id: 'sql-adv-18',
        question: 'How do you compare rows from the same table?',
        options: [
          'NATURAL JOIN',
          'INNER JOIN',
          'Self JOIN',
          'FULL JOIN'
        ],
        correctAnswer: 2,
        explanation: 'Self join joins a table with itself.'
      },
      {
        id: 'sql-adv-19',
        question: 'What is the default transaction isolation level in most databases?',
        options: [
          'SERIALIZABLE',
          'READ COMMITTED',
          'READ UNCOMMITTED',
          'REPEATABLE READ'
        ],
        correctAnswer: 1,
        explanation: 'Most databases default to READ COMMITTED.'
      },
      {
        id: 'sql-adv-20',
        question: 'Which technique improves performance by storing frequently accessed data?',
        options: [
          'Views',
          'Indexing',
          'Procedures',
          'Triggers'
        ],
        correctAnswer: 1,
        explanation: 'Indexes speed up query performance.'
      },
      {
        id: 'sql-adv-21',
        question: 'What does the EXISTS clause do?',
        options: [
          'Joins tables',
          'Tests for subquery row existence',
          'Returns a NULL',
          'Compares strings'
        ],
        correctAnswer: 1,
        explanation: 'EXISTS checks if a subquery returns rows.'
      }
    ]
  }
];
