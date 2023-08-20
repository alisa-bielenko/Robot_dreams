const { Accumulator, CancelableAccumulator } = require('./accumulator');

test('Accumulator increment and decrement', () => {
    const accumulator = new Accumulator(5);
    
    accumulator.increment();
    expect(accumulator.value).toBe(6);

    accumulator.decrement();
    expect(accumulator.value).toBe(5);
});

test('CancelableAccumulator increment, clear, and initialValue', () => {
    const cancelableAccumulator = new CancelableAccumulator(10);

    cancelableAccumulator.increment();
    expect(cancelableAccumulator.value).toBe(11);

    cancelableAccumulator.clear();
    expect(cancelableAccumulator.value).toBe(10);
    expect(cancelableAccumulator.initialValue).toBe(10);
});