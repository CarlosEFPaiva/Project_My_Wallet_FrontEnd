const MockLoginTable = [
    {id:1, name: "Carlos", email: "teste@teste.com", password:"Carlos123*"}
]

const MockUserTable = [
    {id:1, userId: 1, date: "30/11", description: "Almoço Mãe", type: "withdraw", value: 3990},
    {id:2, userId: 1, date: "27/11", description: "Mercado", type: "withdraw", value: 54254},
    {id:3, userId: 1, date: "26/11", description: "Compras Churrasco", type: "withdraw", value: 6760},
    {id:4, userId: 1, date: "20/11", description: "Emprestimo Maria", type: "deposit", value: 50000},
    {id:5, userId: 1, date: "15/11", description: "Salário", type: "deposit", value: 300000},
]

export {
    MockLoginTable,
    MockUserTable
}