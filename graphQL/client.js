document.getElementById('getDataButton').addEventListener('click', async () => {
    
                const query = `
                            query {
                                getSomeData {
                                    id
                                    name
                                }
                            }
                        `;

                const res = await axios.post('http://localhost:3000/graphql', { query })
                    

                const data = res.data.data.getSomeData;
                console.log(data)
                const resultElement = document.getElementById('root');
                resultElement.textContent = `${data[0].name}`;
            });