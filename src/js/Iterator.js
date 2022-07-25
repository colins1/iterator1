import Daemon from '../js/Daemon';
const iterator = function() {
    const a = new Daemon('John');
    return {
        next() {
            return {
                value: a,
                done: false
            }
        }
    }
}

export default iterator();