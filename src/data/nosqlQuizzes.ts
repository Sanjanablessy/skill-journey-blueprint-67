
import { Quiz } from '@/types';

export const nosqlQuizzes: Quiz[] = [
  {
    id: 'nosql-beginner',
    title: 'NoSQL - Beginner',
    description: 'Test your knowledge of basic NoSQL concepts',
    skillCategory: 'NoSQL',
    difficulty: 'beginner',
    questions: [
      {
        id: 'nosql-basic-1',
        question: 'What does NoSQL stand for?',
        options: [
          'No SQL',
          'Not Only SQL',
          'New SQL',
          'Non-SQL'
        ],
        correctAnswer: 1,
        explanation: 'NoSQL stands for "Not Only SQL", indicating it can work alongside SQL.'
      },
      {
        id: 'nosql-basic-2',
        question: 'Which of the following is a NoSQL database type?',
        options: [
          'Document',
          'Key-Value',
          'Column-Family',
          'All of the above'
        ],
        correctAnswer: 3,
        explanation: 'NoSQL includes Document, Key-Value, Column-Family, and Graph databases.'
      },
      {
        id: 'nosql-basic-3',
        question: 'Which NoSQL database is known for document storage?',
        options: [
          'Redis',
          'MongoDB',
          'Cassandra',
          'Neo4j'
        ],
        correctAnswer: 1,
        explanation: 'MongoDB is a popular document-based NoSQL database.'
      },
      {
        id: 'nosql-basic-4',
        question: 'What is a key characteristic of NoSQL databases?',
        options: [
          'ACID compliance only',
          'Horizontal scalability',
          'Fixed schema',
          'SQL queries only'
        ],
        correctAnswer: 1,
        explanation: 'NoSQL databases are designed for horizontal scaling across multiple servers.'
      },
      {
        id: 'nosql-basic-5',
        question: 'Which of the following is a key-value NoSQL database?',
        options: [
          'MongoDB',
          'Redis',
          'CouchDB',
          'Cassandra'
        ],
        correctAnswer: 1,
        explanation: 'Redis is a popular key-value store NoSQL database.'
      },
      {
        id: 'nosql-basic-6',
        question: 'What does BSON stand for in MongoDB?',
        options: [
          'Binary SQL Object Notation',
          'Binary JSON',
          'Basic JSON',
          'Binary Structured Object Notation'
        ],
        correctAnswer: 1,
        explanation: 'BSON stands for Binary JSON, MongoDB\'s binary representation of JSON documents.'
      },
      {
        id: 'nosql-basic-7',
        question: 'Which NoSQL database type is best for storing relationships?',
        options: [
          'Document',
          'Key-Value',
          'Graph',
          'Column-Family'
        ],
        correctAnswer: 2,
        explanation: 'Graph databases are specifically designed to store and query relationships.'
      },
      {
        id: 'nosql-basic-8',
        question: 'What is eventual consistency in NoSQL?',
        options: [
          'Data is always consistent',
          'Data becomes consistent over time',
          'Data is never consistent',
          'Data consistency is immediate'
        ],
        correctAnswer: 1,
        explanation: 'Eventual consistency means data will become consistent across nodes over time.'
      },
      {
        id: 'nosql-basic-9',
        question: 'Which company developed MongoDB?',
        options: [
          'Google',
          'Facebook',
          '10gen (now MongoDB Inc.)',
          'Amazon'
        ],
        correctAnswer: 2,
        explanation: 'MongoDB was developed by 10gen, which later became MongoDB Inc.'
      },
      {
        id: 'nosql-basic-10',
        question: 'What is a collection in MongoDB?',
        options: [
          'A group of databases',
          'A group of documents',
          'A single document',
          'A field in a document'
        ],
        correctAnswer: 1,
        explanation: 'A collection in MongoDB is a group of documents, similar to a table in SQL.'
      },
      {
        id: 'nosql-basic-11',
        question: 'Which of the following is true about NoSQL schemas?',
        options: [
          'Always fixed',
          'Schema-less or flexible schema',
          'Must be defined upfront',
          'Cannot be changed'
        ],
        correctAnswer: 1,
        explanation: 'NoSQL databases typically have flexible or schema-less designs.'
      },
      {
        id: 'nosql-basic-12',
        question: 'What does CAP theorem stand for?',
        options: [
          'Consistency, Availability, Performance',
          'Consistency, Availability, Partition tolerance',
          'Compatibility, Availability, Performance',
          'Consistency, Accuracy, Partition tolerance'
        ],
        correctAnswer: 1,
        explanation: 'CAP theorem refers to Consistency, Availability, and Partition tolerance.'
      },
      {
        id: 'nosql-basic-13',
        question: 'Which NoSQL database is column-oriented?',
        options: [
          'MongoDB',
          'Redis',
          'Cassandra',
          'CouchDB'
        ],
        correctAnswer: 2,
        explanation: 'Apache Cassandra is a column-family NoSQL database.'
      },
      {
        id: 'nosql-basic-14',
        question: 'What is sharding in NoSQL?',
        options: [
          'Data replication',
          'Data partitioning across multiple servers',
          'Data backup',
          'Data encryption'
        ],
        correctAnswer: 1,
        explanation: 'Sharding is the process of distributing data across multiple servers.'
      },
      {
        id: 'nosql-basic-15',
        question: 'Which format is commonly used in document databases?',
        options: [
          'XML',
          'JSON',
          'CSV',
          'SQL'
        ],
        correctAnswer: 1,
        explanation: 'JSON is the most common format for document-based NoSQL databases.'
      },
      {
        id: 'nosql-basic-16',
        question: 'What is replication in NoSQL databases?',
        options: [
          'Creating copies of data across multiple nodes',
          'Backing up data',
          'Compressing data',
          'Encrypting data'
        ],
        correctAnswer: 0,
        explanation: 'Replication creates copies of data across multiple nodes for redundancy.'
      },
      {
        id: 'nosql-basic-17',
        question: 'Which NoSQL database is developed by Google?',
        options: [
          'MongoDB',
          'Bigtable',
          'CouchDB',
          'DynamoDB'
        ],
        correctAnswer: 1,
        explanation: 'Google Bigtable is a column-family NoSQL database developed by Google.'
      },
      {
        id: 'nosql-basic-18',
        question: 'What is BASE in NoSQL context?',
        options: [
          'Basic Availability, Soft state, Eventual consistency',
          'Basic Architecture, Soft state, Extended consistency',
          'Backup Availability, Secure state, Eventual consistency',
          'Basic Access, Soft state, Extended consistency'
        ],
        correctAnswer: 0,
        explanation: 'BASE stands for Basic Availability, Soft state, and Eventual consistency.'
      },
      {
        id: 'nosql-basic-19',
        question: 'Which is a graph database?',
        options: [
          'MongoDB',
          'Redis',
          'Neo4j',
          'Cassandra'
        ],
        correctAnswer: 2,
        explanation: 'Neo4j is a popular graph database for storing and querying relationships.'
      },
      {
        id: 'nosql-basic-20',
        question: 'What is a major advantage of NoSQL databases?',
        options: [
          'ACID compliance',
          'Fixed schema',
          'Horizontal scalability',
          'Complex joins'
        ],
        correctAnswer: 2,
        explanation: 'NoSQL databases excel at horizontal scaling across commodity hardware.'
      },
      {
        id: 'nosql-basic-21',
        question: 'Which NoSQL database is developed by Amazon?',
        options: [
          'MongoDB',
          'DynamoDB',
          'CouchDB',
          'Cassandra'
        ],
        correctAnswer: 1,
        explanation: 'Amazon DynamoDB is a managed NoSQL database service by AWS.'
      }
    ]
  },
  {
    id: 'nosql-intermediate',
    title: 'NoSQL - Intermediate',
    description: 'Test your intermediate NoSQL knowledge',
    skillCategory: 'NoSQL',
    difficulty: 'intermediate',
    questions: [
      {
        id: 'nosql-inter-1',
        question: 'What is the main difference between strong and eventual consistency?',
        options: [
          'No difference',
          'Strong consistency guarantees immediate consistency across all nodes',
          'Eventual consistency is faster',
          'Strong consistency is cheaper'
        ],
        correctAnswer: 1,
        explanation: 'Strong consistency ensures all nodes have the same data immediately, while eventual consistency allows temporary inconsistencies.'
      },
      {
        id: 'nosql-inter-2',
        question: 'In MongoDB, what is an index?',
        options: [
          'A collection of documents',
          'A data structure that improves query performance',
          'A backup of data',
          'A type of document'
        ],
        correctAnswer: 1,
        explanation: 'Indexes in MongoDB improve query performance by creating efficient access paths to data.'
      },
      {
        id: 'nosql-inter-3',
        question: 'What is MapReduce in the context of NoSQL?',
        options: [
          'A backup strategy',
          'A programming model for processing large datasets',
          'A replication method',
          'A security feature'
        ],
        correctAnswer: 1,
        explanation: 'MapReduce is a programming model for processing and generating large datasets in parallel.'
      },
      {
        id: 'nosql-inter-4',
        question: 'Which consistency level provides the highest consistency in Cassandra?',
        options: [
          'ONE',
          'QUORUM',
          'ALL',
          'EACH_QUORUM'
        ],
        correctAnswer: 2,
        explanation: 'ALL consistency level requires all replica nodes to respond, providing the highest consistency.'
      },
      {
        id: 'nosql-inter-5',
        question: 'What is denormalization in NoSQL design?',
        options: [
          'Removing all relationships',
          'Storing related data together to avoid joins',
          'Normalizing data structure',
          'Compressing data'
        ],
        correctAnswer: 1,
        explanation: 'Denormalization stores related data together to optimize read performance and avoid expensive joins.'
      },
      {
        id: 'nosql-inter-6',
        question: 'In DynamoDB, what is a partition key?',
        options: [
          'A backup key',
          'A key used to determine which partition stores an item',
          'An encryption key',
          'A secondary key'
        ],
        correctAnswer: 1,
        explanation: 'A partition key determines which partition (physical storage) will store the item.'
      },
      {
        id: 'nosql-inter-7',
        question: 'What is the purpose of a bloom filter in NoSQL databases?',
        options: [
          'Data compression',
          'Quickly determining if an element might be in a set',
          'Data encryption',
          'Load balancing'
        ],
        correctAnswer: 1,
        explanation: 'Bloom filters quickly determine if an element might exist in a set, reducing unnecessary disk reads.'
      },
      {
        id: 'nosql-inter-8',
        question: 'Which of the following is true about ACID vs BASE?',
        options: [
          'ACID is for NoSQL, BASE for SQL',
          'ACID emphasizes consistency, BASE emphasizes availability',
          'They are the same',
          'BASE is outdated'
        ],
        correctAnswer: 1,
        explanation: 'ACID emphasizes strong consistency, while BASE prioritizes availability and eventual consistency.'
      },
      {
        id: 'nosql-inter-9',
        question: 'What is a hot spot in distributed NoSQL systems?',
        options: [
          'A backup location',
          'A node receiving disproportionately high traffic',
          'A secure area',
          'A replication point'
        ],
        correctAnswer: 1,
        explanation: 'A hot spot occurs when one node receives much more traffic than others, creating a bottleneck.'
      },
      {
        id: 'nosql-inter-10',
        question: 'In MongoDB, what is the purpose of the ObjectId?',
        options: [
          'To store large objects',
          'To serve as a unique identifier for documents',
          'To reference other collections',
          'To store metadata'
        ],
        correctAnswer: 1,
        explanation: 'ObjectId is a unique identifier automatically generated for each document in MongoDB.'
      },
      {
        id: 'nosql-inter-11',
        question: 'What is vector clock in distributed systems?',
        options: [
          'A timing mechanism',
          'A method to determine causality between events',
          'A backup system',
          'A load balancer'
        ],
        correctAnswer: 1,
        explanation: 'Vector clocks help determine the causal relationship between events in distributed systems.'
      },
      {
        id: 'nosql-inter-12',
        question: 'Which NoSQL database uses the Gossip protocol?',
        options: [
          'MongoDB',
          'Cassandra',
          'Redis',
          'CouchDB'
        ],
        correctAnswer: 1,
        explanation: 'Apache Cassandra uses the Gossip protocol for peer-to-peer communication.'
      },
      {
        id: 'nosql-inter-13',
        question: 'What is read repair in Cassandra?',
        options: [
          'Fixing corrupted data',
          'A mechanism to fix inconsistencies during read operations',
          'Repairing indexes',
          'Backing up data'
        ],
        correctAnswer: 1,
        explanation: 'Read repair fixes inconsistencies by comparing data from multiple replicas during reads.'
      },
      {
        id: 'nosql-inter-14',
        question: 'In Redis, what is the difference between persistence methods RDB and AOF?',
        options: [
          'No difference',
          'RDB creates snapshots, AOF logs every operation',
          'AOF is faster',
          'RDB is deprecated'
        ],
        correctAnswer: 1,
        explanation: 'RDB creates point-in-time snapshots, while AOF logs every write operation.'
      },
      {
        id: 'nosql-inter-15',
        question: 'What is eventual consistency window?',
        options: [
          'A backup window',
          'Time period during which data may be inconsistent',
          'A security feature',
          'A monitoring tool'
        ],
        correctAnswer: 1,
        explanation: 'The eventual consistency window is the time period when data might be inconsistent across replicas.'
      },
      {
        id: 'nosql-inter-16',
        question: 'Which technique helps prevent hot spots in sharded databases?',
        options: [
          'Using sequential keys',
          'Using random or hash-based keys',
          'Using timestamps as keys',
          'Using alphabetical keys'
        ],
        correctAnswer: 1,
        explanation: 'Random or hash-based keys distribute data more evenly across shards, preventing hot spots.'
      },
      {
        id: 'nosql-inter-17',
        question: 'What is a write-ahead log (WAL) in NoSQL databases?',
        options: [
          'A backup log',
          'A log that records changes before they are applied',
          'An error log',
          'A performance log'
        ],
        correctAnswer: 1,
        explanation: 'WAL ensures durability by logging changes before applying them to the main data store.'
      },
      {
        id: 'nosql-inter-18',
        question: 'In graph databases, what is traversal?',
        options: [
          'Backing up data',
          'Following relationships between nodes',
          'Indexing nodes',
          'Compressing graphs'
        ],
        correctAnswer: 1,
        explanation: 'Traversal is the process of following relationships (edges) between nodes in a graph.'
      },
      {
        id: 'nosql-inter-19',
        question: 'What is the purpose of consistent hashing in distributed NoSQL systems?',
        options: [
          'Data encryption',
          'Distributing data evenly and minimizing reshuffling',
          'Data compression',
          'Load balancing only'
        ],
        correctAnswer: 1,
        explanation: 'Consistent hashing distributes data evenly and minimizes data movement when nodes are added or removed.'
      },
      {
        id: 'nosql-inter-20',
        question: 'What is anti-entropy in distributed databases?',
        options: [
          'A backup process',
          'A process to detect and repair inconsistencies',
          'A security measure',
          'A performance optimization'
        ],
        correctAnswer: 1,
        explanation: 'Anti-entropy processes detect and repair data inconsistencies between replicas.'
      },
      {
        id: 'nosql-inter-21',
        question: 'In document databases, what is embedding vs referencing?',
        options: [
          'Same thing',
          'Embedding stores related data within documents, referencing stores it separately',
          'Referencing is faster',
          'Embedding is deprecated'
        ],
        correctAnswer: 1,
        explanation: 'Embedding stores related data within the same document, while referencing stores it in separate documents.'
      }
    ]
  }
];
