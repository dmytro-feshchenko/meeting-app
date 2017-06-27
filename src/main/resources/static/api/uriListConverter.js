/* Convert a single or array of resources into "URI1\nURI2\nURI3..." */

/**
 * Reads array of resources from the given string
 * @param str string with resources
 * @returns {Array|*} array of resources
 */
export function read (str) {
    return str.split('\n');
}

/**
 * Returns self URI
 * @param obj array of object with links
 * @returns {*} self URI
 */
export function write (obj) {
    // If this is an Array, extract the self URI and then join using a newline
    if (obj instanceof Array) {
        return obj.map(function(resource) {
            return resource._links.self.href;
        }).join('\n');
    } else {
        // otherwise, just return the self URI
        return obj._links.self.href;
    }
}