# Async Queue Processor


## AsyncQueue - Class Definition

### Methods:
- enqueue
- peek
- print
- getCurrentInterval
- start
- pause

### Events:

- Emits
  - enqueued - Emitted when an item is enqueued
  - dequeued - Emitted when an item is dequeued
  
- Listens
  - interval - Accepts Number, updates the default interval for the instance

