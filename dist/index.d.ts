export declare function round(value: any, rounding_point: any): number;
export declare function keys(obj: any): string[];
export declare function asPromise(value: any): Promise<{}>;
export declare function combinations(list: any, n?: any): any;
export declare function permutations(list: any, n?: any): any;
export declare function sequence({start, increment, max, length}: {
    start?: number;
    increment?: number;
    max: any;
    length: any;
}): any[];
export declare function flatten(list_of_lists: any): any[];
export declare function unique(elems: any): {}[];
export declare function seconds(n: any): number;
export declare function first(list: any): any;
export declare function last(list: any): any;
export declare function shuffle(list: any): any;
export declare function sample<T>(list: T[], n: number): T[];
