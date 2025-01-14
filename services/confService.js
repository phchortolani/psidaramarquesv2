import axios from "axios";

export async function SalvarCores(cor) {
    return await axios.post('/api/saveColor', { obj: cor })
}

export async function ObterCores() {
    return await axios.get('/api/getColors')
}

export async function SalvarAgendamento() {
    return await axios.post('/api/saveScheduleReport')
}
export async function SalvarAgendamentoView(ip) {
    return await axios.post('/api/saveScheduleReport', { onlyView: true, ip: ip ?? null })
}