export class NegativeTriangle extends Error {
    constructor(message: string){
        super(message)
        this.name = 'Invalid Triangle - Negative Side'
    }
  }