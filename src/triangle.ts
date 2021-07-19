import { InvalidTriangle } from './invalid_tr'
import { NegativeTriangle } from './negative_tr'

export class Triangle {
  private readonly sideA: number
  private readonly sideB: number
  private readonly sideC: number
  constructor (sideA: number, sideB: number, sideC: number){
    if(sideA <= 0 || 
        sideB <= 0 || 
        sideC <= 0){
        throw new NegativeTriangle('Invalid Triangle - Negative Side')
    }
    if(sideA >= sideB + sideC || 
        sideB >= sideA + sideC || 
        sideC >= sideA + sideB){
        throw new InvalidTriangle('Invalid Triangle')
    }
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
  }
  classify (): string{
      if(this.sideA === this.sideB &&
        this.sideB === this.sideC &&
        this.sideA === this.sideC){
            return 'Equilateral'
        }
        else if(this.sideA !== this.sideB &&
            this.sideB !== this.sideC &&
            this.sideA !== this.sideC){
                return 'Scalene'
            }
            else{
                return 'Isosceles'
            }
  }
  IsRight(): string{
        let  doubleA: number = this.sideA*this.sideA
        let  doubleB: number = this.sideB*this.sideB
        let  doubleC: number = this.sideC*this.sideC
        if(doubleA === doubleB + doubleC ||
            doubleB === doubleA + doubleC ||
            doubleC === doubleA + doubleB){
                return 'Is Right Angled'
            }
            return 'Is Not Right Angled'

  }
}