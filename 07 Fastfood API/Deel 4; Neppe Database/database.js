const chains = [
    { id: 'mcdonalds', name: 'McDonalds', city: 'Utrecht', score: 6 },
    { id: 'subway', name: 'Subway', city: 'Leeuwarden', score: 7 },
    { id: 'kfc', name: 'Kentucky Fried Chicken', city: 'Lelystad', score: 8 },
    { id: 'burgerking', name: 'Burger King', city: 'Gouda', score: 7 }
];

// Returning promises, because database operations would take time (in a real Node app)
module.exports = {
    findAll() {
        return Promise.resolve(chains);
    },
    findById(id) {
        const result = chains.find((chain) => {
            return (chain.id === id);
        });
        return Promise.resolve(result);
    }
}