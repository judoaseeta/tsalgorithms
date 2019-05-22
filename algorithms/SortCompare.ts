import Sort from './Sort';
import InsertionSort from './InsertionSort';
import SelectionSort from './SelectionSort';
import MergeSort from './MergeSort';
import QuickSort from './QuickSort';
import randArr from './randArr';
import StopWatch from './StopWatch';
import MergeBUSort from "./MergeBUSort";
interface newSort<Item> {
    new(arr: Item[]) : Sort<Item>;
}
interface SortExecutionResult {
    SortName: string;
    executionTime: number;
};
function excuteSort (sort: newSort<number>, times: number, numsPerEach: number) {
    let totalExcutedTime: number = 0;
    for(let i = 0; i < times; i++) {
        const newArr = randArr(numsPerEach);
        const sortInstance = new sort(newArr);
        const watch = new StopWatch();
        const sorted = sortInstance.sort();
        totalExcutedTime += watch.elapsedTime();
    }
    return {
        name: new sort([1,2,3]).showName(),
        result: totalExcutedTime
    };
}
function SortCompare(Sorts: newSort<number>[], times: number, numsPerEach: number = 1000) {
    let results: SortExecutionResult[] = [];
    for(let i = 0; i < Sorts.length; i++) {
        const result = excuteSort(Sorts[i], times, numsPerEach);
        results.push({executionTime: result.result, SortName: result.name})
    }
    results.sort((a, b) => a.executionTime - b.executionTime);
    for(let i = 0; i < Sorts.length; i++) {
        console.log(`Result - ${results[i].SortName} takes ${results[i].executionTime} milliseconds!`);
    }
}
SortCompare([ InsertionSort, SelectionSort, MergeSort,MergeBUSort, QuickSort], 1000, 1000);
