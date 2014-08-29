/* OWL service */
var service = {
    presents: { },
    supports: { },
    describedBy: { }
};

/* Service Profile */
var profile = {
    presentedBy: { },
    serviceName: undefined,
    textDescription: undefined,
    contactInformation: undefined,
    iopr: {
        parameter: undefined,
        input: undefined,
        output: undefined,
        precondition: undefined,
        result: undefined
    }
};

/* Service Process */
var process = {
    precondition: undefined,
    participant: undefined,
    existential: undefined,
    parameter: undefined,
    input: undefined,
    output: undefined,
    result: {
        resultVar: undefined
    }
}
