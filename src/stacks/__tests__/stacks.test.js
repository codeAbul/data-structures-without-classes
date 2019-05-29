import stack from "../index";

var mockStack = Object.assign(Object.create(stack),{
    elements:[]
});


test("Pushes new elements with push",()=>{
    mockStack.push(1);
    expect(mockStack.elements).toEqual([1]);
});

test("pops elements with pop", ()=>{
    mockStack.pop();
    expect(mockStack.elements).toEqual([]);
});

test("peek returns the last element", () => {
    mockStack.elements= [1,2,3,4];
    expect(mockStack.peek()).toEqual(4);
})