const Constant = {
    GUID: 1,
    /**
     * type | template
     */
    RE_KEY: /(.+)\|(?:\+(\d+)|([\+\-]?\d+-?[\+\-]?\d*)?(?:\.(\d+-?\d*))?)/,
    /**
     * type | min-max
     */
    RE_RANGE: /([\+\-]?\d+)-?([\+\-]?\d+)?/,
    RE_PLACEHOLDER: /\\*@([^@#%&()\?\s]+)(?:\((.*?)\))?/g,
    TYPE: "Boolean Number String Function Array Date RegExp Object Error Symbol"
};

export default Constant;