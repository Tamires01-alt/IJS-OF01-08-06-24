// Importe as funções necessárias
const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcular o pacote', () => {
    test('retornar o pacote intermediario caso o número total de horas seja exatamente 100', () => {
       
        const maxHorasPorPacoteMock = {
            pacote_basico: 50,
            pacote_intermediario: 100,
            pacote_premium: 200
        };

        
        const entriesSpy = jest.spyOn(Object, 'entries').mockReturnValue([
            ['pacote_basico', 50],
            ['pacote_intermediario', 100],
            ['pacote_premium', 200]
        ]);
        const result = calcularPacote(100);

        expect(result).toBe('pacote_intermediario');
        entriesSpy.mockRestore();
    });
});
