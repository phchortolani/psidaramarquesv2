import axios from "axios";

export async function SalvarCores(cor) {
    return await axios.post('/api/saveColor', { obj: cor })
}

export async function ObterCores() {
    return await axios.get('/api/getColors')
}