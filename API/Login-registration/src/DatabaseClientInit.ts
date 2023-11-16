import { CosmosClient} from "@azure/cosmos";

const InitialiseDatabaseClient = async () => {
    const endpoint = "";
    const key = "";
    const client = new CosmosClient({ endpoint, key });
    return await client;
}

export default InitialiseDatabaseClient;