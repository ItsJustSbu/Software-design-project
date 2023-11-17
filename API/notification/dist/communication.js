var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { EmailClient } from "@azure/communication-email";
// This code retrieves your connection string from an environment variable.
const connectionString = "endpoint=https://reddamcommunicationservice.africa.communication.azure.com/;accesskey=fBxB5D/dpS1sM1zftc879Ni+Y6TuCV9qUFP1zVx6YuBaalFnkGAR30GXOTfwCIbgy9AbJ+eKyr7BaX/58dHSog==";
const client = new EmailClient(connectionString);
function main(reciever, subject, body) {
    return __awaiter(this, void 0, void 0, function* () {
        const emailMessage = {
            senderAddress: "DoNotReply@b96f5d4d-0daf-459a-b403-d169232b6c2a.azurecomm.net",
            content: {
                subject: subject,
                plainText: body,
            },
            recipients: {
                to: [{ address: reciever }],
            },
        };
        const poller = client.beginSend(emailMessage);
        const result = (yield poller).pollUntilDone();
        console.log(result);
    });
}
export default main;
