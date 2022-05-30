

describe('POST /characters', function(){

    it('deve cadastrar um personagemn', function(){

        const character ={
            name: 'Charles Xavier',
            alias: 'Professor x',
            team: ['x-men", "marvel'],
            active: true	   
        }

        cy.request({
            method: 'POST',
            url: '/characters',
            body: character
        }).then(function(response=){
            expect(response.code).to.eql(201)
        })
    })
})