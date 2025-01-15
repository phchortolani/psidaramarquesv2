import axios from "axios";

export class WhatsappService {
    accessToken = undefined
    phoneNumberId = undefined
    metaUrl = undefined

    constructor() {
        this.accessToken = process.env.META_TOKEN;
        this.phoneNumberId = process.env.META_PHONE_ID;
        this.metaUrl = process.env.META_URL
    }

    async sendMessage(to, message) {
        try {
            const url = `${this.metaUrl}${this.phoneNumberId}/messages`;
        /*     console.log('Enviando mensagem para:', to);
            console.log('url:', url);
            console.log('mensagem:', message); */

            const body = {
                messaging_product: "whatsapp",
                recipient_type: "individual",
                to: to,
                type: "text",
                text: {
                    preview_url: false,
                    body: message
                }
            }
            const response = await axios.post(url, body, {
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`,
                    'Content-Type': 'application/json',
                }
            });
            /* console.log('Mensagem enviada:', response.data); */
            return response.data;
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error.response?.data || error.message);
            throw error;
        }
    }

}