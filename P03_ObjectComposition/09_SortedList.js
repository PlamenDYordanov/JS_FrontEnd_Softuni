
function createSortedList() {
    return {
        list: [],
        size: 0,
        add(elem) {
            this.list.push(elem);
            let item = this.list[this.list.length-1];
            this.list.sort((a, b) => a-b);
            this.size = this.list.length;
            return item;
        },
        remove(index) {
            if (!this.validateIndex(index)) { return; }
            let item = this.list[index];
            this.list.splice(index, 1);
            this.size = this.list.length;
            return item;
        },
        get(index) {
            if (!this.validateIndex(index)) { return; }
            return this.list[index];
        },
        validateIndex(index) {
            return -1 < index && index < this.size;
        }
    };
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
