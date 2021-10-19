function adjustStateObject(stateObject, setStateObject, atributesToBeChanged, newAtributesValues) {
    const newObject = {...stateObject};
    if (typeof(atributesToBeChanged) === "string") {
        newObject[atributesToBeChanged] = newAtributesValues;
    } else {
        atributesToBeChanged.forEach( (atribute, index) => {
            newObject[atribute] = newAtributesValues[index];
        }) 
    }
    setStateObject(newObject);
}

export {
    adjustStateObject,
}