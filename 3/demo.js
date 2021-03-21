async function foo() {
    return Math.random() > 0.5;
}

async function bar(){
    const result = await foo();
    console.log(result);
    return 123
}

bar().then(res => {
    console.log(res);
})
