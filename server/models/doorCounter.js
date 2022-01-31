let counters = []

async function findOrCreateCounter(name) {
    let counter = counters.find((counter) => counter.name === name)
    if (counter === undefined) {
        counter = { name , value: 0}
        console.log('creating counter', counter)
        counters.push( counter )
    }
    return counter
}

async function setCounterValue(name, value) {
    let counter = await findOrCreateCounter(name)
    counter.value = value
    return counter
}

async function resetCounter(name) {
    return setCounterValue(name, 0)
}

async function incrementCounter(name) {
    let counter = await findOrCreateCounter(name)
    counter.value++
    return counter
}

async function decrementCounter(name) {
    let counter = await findOrCreateCounter(name)
    // if (counter.value) counter.value--
    return counter
}


async function getCounterValue(name) {
    let counter = findOrCreateCounter(name)
    return counter
}

async function list() {
    return counters.map((counter) =>  counter.name)
}

async function deleteAll() {
    counters = []
}

module.exports = {
    list,
    resetCounter,
    setCounterValue,
    incrementCounter,
    decrementCounter,
    getCounterValue,
    deleteAll
}
