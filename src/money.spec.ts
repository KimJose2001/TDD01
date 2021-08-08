import { Bank } from './bank'
import { Expression } from './expression'
import { Money} from './money'
describe('Money', () => {
    it('should correctly handle dollar multiplication', () =>{
    const five: Money = Money.dollar(5)
    expect(five.times(2).equals(Money.dollar(10))).toBeTruthy()
    expect(five.times(3).equals(Money.dollar(15))).toBeTruthy()
    })

    it('should handle money equality', () =>{
        expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy()
        expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy()
        expect(Money.dollar(5).equals(Money.euro(5))).toBeFalsy()
    })  

    it('should handle currencies', () =>{
        expect(Money.dollar(1).currency()).toEqual('USD')
        expect(Money.euro(1).currency()).toEqual('EUR')
    })


})