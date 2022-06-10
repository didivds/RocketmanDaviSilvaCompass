


import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/Calculadora'

const expect = chai.expect

describe('testes de soma', () => {
    it('deve somar 4 e 5 resultando em 9', () => {
        let resultado = Calculadora.soma(4, 5)
        expect(resultado).to.be.eq(9)
    }) 
})

