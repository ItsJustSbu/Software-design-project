import { EmailClient } from "@azure/communication-email";

// This code retrieves your connection string from an environment variable.
const connectionString = "endpoint=https://reddamcommunicationservice.africa.communication.azure.com/;accesskey=fBxB5D/dpS1sM1zftc879Ni+Y6TuCV9qUFP1zVx6YuBaalFnkGAR30GXOTfwCIbgy9AbJ+eKyr7BaX/58dHSog==";
const client = new EmailClient(connectionString);

async function main(reciever : string, subject : string, body : string) {

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
    const result = (await poller).pollUntilDone();
    console.log(result);
}

export default main;


