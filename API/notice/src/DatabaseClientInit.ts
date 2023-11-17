import { CosmosClient} from "@azure/cosmos";

const InitialiseDatabaseClient = async () => {
    const endpoint = "https://reddamdbacc.documents.azure.com:443/";
    const key = "r4D6DRNU0iAk3hrpHmEZjwz7txrRIGcfxzA53ce53sq5rEjJD7gody0TwYJsC1n5T99WqHlSn5rtACDbqeAfAQ==";
    const client = new CosmosClient({ endpoint, key });
    return await client;
}

export default InitialiseDatabaseClient;