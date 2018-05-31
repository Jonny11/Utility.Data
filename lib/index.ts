// ______________ GLOBAL UTILITY FUNCATIONS ______________

export function round(value, rounding_point){
    const factor = Math.pow(10, rounding_point);
    return Math.round(value * factor) / factor;
}

export function keys(obj){
    return obj == null ? [] : Object.keys(obj);
}

export function asPromise(value){
    return new Promise((resolve, reject) => resolve(value));
}

export function combinations(list, n=list.length){
    // take a list and return a list of all possible (n)-ary
    if(n === 0) return [];
    if(n === 1) return list.map(x=>[x]);
    var output_list = [];
    for(var i = 0; i < list.length - n + 1; i++){
        let remaining_tail = list.slice(i+1);
        output_list = output_list.concat(combinations(remaining_tail, n-1).map(ys => [list[i]].concat(ys)));
    }
    return output_list;
}


export function permutations(list, n=list.length){
    // take a list and return a list of all possible (n)-ary
    if(n === 0) return [];
    if(n === 1) return list.map(x=>[x]);
    var output_list = [];
    for(var i = 0; i < list.length; i++){
        let remaining_list = list.slice(0,i).concat(list.slice(i+1,list.length));
        output_list = output_list.concat(permutations(remaining_list, n-1).map(ys => [list[i]].concat(ys)));
    }
    return output_list;
}

export function sequence({start=0, increment=1, max, length}){
    if(max === undefined && length === undefined){
        throw new Error("sequence() requires at least 'max' or 'length' parameter defined");
    }
    const list = [];
    for(let i=start; list.length < length || i <= max ; i+=increment){
        list.push(i);
    }
    return list;
}

export function flatten(list_of_lists){
    return [...[].concat.apply([], list_of_lists)];
}

export function unique(elems){
    return [...new Set(elems)]
}

export function seconds(n){
    return n * 1000;
}


export function first(list){
    return list.length > 0 ? list[0] : null;
}

export function last(list){
    return list.length > 0 ? list[list.length-1] : null;
}

export function shuffle(list) {
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
}

export function sample<T>(list:T[], n:number): T[] {
    var len = list.length;
    if (n > len) throw new RangeError("getRandom: more elements taken than available");

    var result = new Array(n);
    var indices = Array.from({length: len}, (el, i) => i);
    var random_selection_indices = shuffle(indices).slice(0,n);
    while (n--) result[n] = list[random_selection_indices[n]]
    
    return result;
}

