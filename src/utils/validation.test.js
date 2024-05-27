const {
    firstName,
    verifyStockAvailability,
    calculateTotalPrice
} = require("../utils/validations");

describe("firstName()", ()=> {
    it("deveria retornar o primeiro nome quando o nome completo fosse fornecido", () => {
        const fullName = "Fulano de Tal";
        const result = firstName(fullName);
        expect(result).toBe("Fulano");
    });

    it("deveria retornar o mesmo nome quando não houver espaços em branco", () => {
        const name = "Fulano";
        const result = firstName(name);
        expect(result).toBe("Fulano");
    });

    it("deveria retornar o primeiro nome quando houver espaços em branco no inicio", () => {
        const name = " Fulano";
        const result = firstName(name);
        expect(result).toBe("Fulano");
    });

    it("deveria retornar o primeiro nome quando houver espaços em branco no final", () => {
        const name = "Fulano ";
        const result = firstName(name);
        expect(result).toBe("Fulano");
    });
});

describe("verifyStockAvailability", ()=>{
    it("deve retornar true se a quantidade disponível do produto selecionado for maior que a pedida", ()=>{
        const productType = "laptop"
        const qty = 5
        const result = verifyStockAvailability(productType, qty)
        expect(result).toBe(true)
    })
    it("deve retornar falso se a quantidade disponível do produto selecionado for zero", ()=>{
        const productType = "book"
        const qty = 5
        const result = verifyStockAvailability(productType, qty)
        expect(result).toBe(false)
    })
    it("deve retornar falso se a quantidade passada via parâmetro for negativa", ()=>{
        const productType = "book"
        const qty = -1
        const result = verifyStockAvailability(productType, qty)
        expect(result).toBe(false)
    })
    it("deve retornar falso se a quantidade passada via parâmetro não for inteira", ()=>{
        const productType = "book"
        const qty = 1.5
        const result = verifyStockAvailability(productType, qty)
        expect(result).toBe(false)
    })
    it("deve retornar falso se o produto passado via parâmetro não existir no array", ()=>{
        const productType = "plane"
        const qty = 2
        const result = verifyStockAvailability(productType, qty)
        expect(result).toBe(false)
    })
    it("deve retornar falso se o uma string for passada via parâmetro para a quantidade", ()=>{
        const productType = "plane"
        const qty = "oi"
        const result = verifyStockAvailability(productType, qty)
        expect(result).toBe(false)
    })
})

describe("calculateTotalPrice", ()=> {
    it("deve retornar o somatório de todos os (preço * quantidade) dos produtos presentes", ()=>{
        const produtos = [
            { name: 'Product 1', price: 10, quantity: 2 },
            { name: 'Product 2', price: 15, quantity: 2 },
            { name: 'Product 3', price: 20, quantity: 1 }
        ]
        const result = calculateTotalPrice(produtos);
        expect(result).toBe(70)
    })
    it("deve retornar aviso de erro se a quantidade de itens de um produto for negativa", ()=>{
        const produtos = [
            { name: 'Product 1', price: 10, quantity: 2 },
            { name: 'Product 2', price: 15, quantity: -3 },
            { name: 'Product 3', price: 20, quantity: 1 }
        ]
        const result = calculateTotalPrice(produtos);
        expect(result).toBe("ERROR - Há produto com quantidade negativa")
    })
    it("deve retornar aviso de erro se o preço de um produto for negativo", ()=>{
        const produtos = [
            { name: 'Product 1', price: 10, quantity: 2 },
            { name: 'Product 2', price: -15, quantity: 2 },
            { name: 'Product 3', price: 20, quantity: 1 }
        ]
        const result = calculateTotalPrice(produtos);
        expect(result).toBe("ERROR - Há produto com preço negativo");
    })
    it("deve retornar aviso de erro se o se o nome de um produto não é uma string", ()=>{
        const produtos = [
            { name: 56, price: 10, quantity: 2 },
            { name: 'Product 2', price: 15, quantity: 2 },
            { name: 'Product 3', price: 20, quantity: 1 }
        ]
        const result = calculateTotalPrice(produtos);
        expect(result).toBe("ERROR - O nome de um produto não pode ser uma string");
    })
})