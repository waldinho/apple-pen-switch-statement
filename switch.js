for (var i = 1; i <= 100; i++) {
    switch (true) {
        case i % 3 === 0 && i % 5 === 0:
            console.log("applepen");
            break;
        case i % 3 === 0:
            console.log("apple");
            break
        case i % 5 === 0:
            console.log("pen");
            break
        default:
            console.log(i);
    }
}
