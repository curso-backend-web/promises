// Crear una operación que devuelva el resultado de una suma asíncrona en una promesa. Después elevar al cuadrado el resultado.

// Si algún sumando es 0 devolverá error.
// Si el resultado de la potencia es mayor que 100 devolverá error.


// import {sumaFn, powFn, promiseFn} from './promises.js'
import promises from './promises.js';
import {jest} from '@jest/globals';

describe('sample',()=>{
    test('1+1 = 2',()=>{
        expect(1+1).toBe(2);
    })
})

describe('promises',()=>{
    describe('testing sumaFn',()=>{
        test('promises.sumaFn(1,1) should return 2',()=>{
           return  promises.sumaFn(1,1).then(data => expect(data).toBe(2))
        })
        test('promises.sumaFn(1,0) should return error "not allowed"',()=>{
            expect.assertions(1);
            return promises.sumaFn(1,0).catch(error => expect(error.message).toBe('not allowed'))
        })
    })
    describe('testing powFn',()=>{
        test('promises.powFn(2) should return 4',()=>{
            return promises.powFn(2).then(data => expect(data).toBe(4))
        })
        test('promises.powFn(11) should return error "pow greater than 100"',()=>{
            expect.assertions(1);
            return promises.powFn(11).catch(error => expect(error.message).toBe("pow greater than 100"))
        })
    })
    describe('testing promiseFn',()=>{
        test('promises.promiseFn(2,2) should return 16',()=>{
            const spySumaFn = jest.spyOn(promises,'sumaFn');
            const spyPowFn = jest.spyOn(promises,'powFn');
            return promises.promiseFn(2,2).then(data => {
                expect(spySumaFn).toHaveBeenCalledTimes(1);
                expect(spyPowFn).toHaveBeenCalledTimes(1);
                expect(data).toBe(16)
            })
        })
    })
})
