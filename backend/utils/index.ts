import fs from 'fs';
import log4js from 'log4js';
import path from 'path';
const AppLogger = log4js.getLogger('wildcard');

const removeOldFile = (dir: string, filename: string, dayAgo: number) => {
    fs.stat(path.join(dir, filename), (error, stats) => {
        const now = new Date();
        if (stats.birthtime < new Date(now.valueOf() - dayAgo * 24 * 60 * 60 * 1000)) {
            fs.unlink(path.join(dir, filename), (err: any) => {
                if (err) {
                    AppLogger.info('error in ' + path.join(dir, filename) + ' | ' + err.message);
                    return;
                }
                AppLogger.info('deleted ' + path.join(dir, filename));
            });
        }
    });
};

export const clearOldFilesInDir = async (
    dir: string,
    dayAgo: number,
    fileNameStartWith: string,
) => {
    fs.readdir(dir, (err: any, fileNameList: string[]) => {
        fileNameList.forEach(filename => {
            if (!fileNameStartWith || filename.startsWith(fileNameStartWith)) {
                removeOldFile(dir, filename, dayAgo);
            }
        });
    });
};

export const sortObjectArrayByField = (objectArray: object[], field: string, order: string) => {
    function compare(a: any, b: any) {
        if (order === 'asc') {
            return a[field] - b[field];
        }
        return b[field] - a[field];
    }

    return objectArray.sort(compare);
};

export const isSameObject = (a: any, b: any) => {
    const keysA = Object.keys(a).sort();
    const keysB = Object.keys(b).sort();
    if (keysA.length !== keysB.length) {
        return false;
    }
    for (let i = 0; i < keysA.length; i++) {
        if (keysA[i] !== keysB[i]) {
            return false;
        }
        if (typeof a[keysA[i]] === 'object') {
            if (isSameObject(a[keysA[i]], b[keysB[i]]) !== true) {
                return false;
            }
        } else if (a[keysA[i]] !== b[keysB[i]]) {
            return false;
        }
    }
    return true;
};

export const flattenObject = (data: any) => {
    const result = {};
    function recurse(cur: any, prop: string) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (typeof cur.getMonth === 'function') {
            // it is a date object
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
            for (let i = 0, l = cur.length; i < l; i++) {
                recurse(cur[i], prop + '[' + i + ']');
                if (l === 0) {
                    result[prop] = [];
                }
            }
        } else {
            let isEmpty = true;
            Object.keys(cur).forEach(p => {
                isEmpty = false;
                recurse(cur[p], prop ? prop + '.' + p : p);
            });
            if (isEmpty && prop) {
                result[prop] = {};
            }
        }
    }
    recurse(data, '');
    return result;
};

export const flattenObjectKeys = (data: any): string[] => {
    const result = [];
    function recurse(cur: any, prop: string) {
        if (prop) {
            result.push(prop);
        }
        if (Object(cur) !== cur) {
            return;
        } else if (Array.isArray(cur)) {
            for (let i = 0, l = cur.length; i < l; i++) {
                recurse(cur[i], prop + '[' + i + ']');
            }
        } else {
            Object.keys(cur).forEach(p => {
                recurse(cur[p], prop ? prop + '.' + p : p);
            });
        }
    }
    recurse(data, '');
    return result;
};

export const generateUUID = () => {
    let d = new Date().getTime();
    return 'xxxx-4xxx-yxxx'.replace(/[xy]/g, c => {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

export const isEmptyObject = (obj: any): boolean => {
    return !(obj && obj.constructor === Object && Object.keys(obj).length !== 0);
};

export const tokenStore = (() => {
    let tokens = [];

    return {
        decode: token => {
            let payload;
            tokens = tokens.filter(x => {
                if (x.token === token) {
                    payload = x.payload;
                    return false;
                }
                return true;
            });
            return payload;
        },
        encode: payload => {
            const uuid = generateUUID();
            tokens.push({ token: uuid, payload });
            return uuid;
        },
    };
})();
