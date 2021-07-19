import { InvalidTriangle } from "./invalid_tr"
import { NegativeTriangle } from "./negative_tr"
import { Triangle } from "./triangle"

describe('Type of Triangle: ', () => {
  test('Invalid triangle with negative side', () => {
    expect(() => {
        const t1 = new Triangle(-5, 5, 5)
    }).toThrow(new NegativeTriangle('Invalid Triangle - Negative Side'))
  })
 
    test("Invalid triangle with one side larger than the sum of other two", () => {
      expect(() => {
          const t2 = new Triangle(11, 5, 5)
      }).toThrow(new InvalidTriangle('Invalid Triangle'))
    })

    test('Equilateral triangle', () => {
      const t3 = new Triangle(3, 3, 3)
      const type1 = t3.classify()
      expect(type1).toEqual('Equilateral')
      })

      test('Isosceles triangle', () => {
        const t4 = new Triangle(4, 3, 3)
        const type2 = t4.classify()
        expect(type2).toEqual('Isosceles')
        })

        test('Scalene triangle', () => {
          const t5 = new Triangle(3, 4, 5)
          const type3 = t5.classify()
          expect(type3).toEqual('Scalene')
          })

          test('Right Angled Triangle', () => {
            const t6 = new Triangle(3, 4, 5)
            const rect = t6.IsRight()
            expect(rect).toEqual('Is Right Angled')
          })
    })