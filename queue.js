const { EventEmitter } = require("events");


// Queue class 
class AsyncQueue extends EventEmitter{
    // Array is used to implement a Queue 
    constructor() {
        super();
        this.items = [];        
    }


    enqueue(element) {
        this.items.push(element);
        this.emit('enqueued', element);
    }

    peek() {
        if (this.isEmpty())
            console.log("Queue is empty");
        return this.items[0];
    }

    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
            console.log(str);
        }

        return this.items;
    }
    isEmpty() {
        return this.items.length == 0;
    }

    start() {
        if (this.isEmpty())
        console.log('dequeued', '');
        return this.emit('dequeued', this.items.shift());
    }
}


// module.exports = {
//     AsyncQueue: () => AsyncQueue,
//     //enqueue
//     // peek,
//     // printQueue,
//     // isEmpty,
//     // start
// }
module.exports = AsyncQueue;

