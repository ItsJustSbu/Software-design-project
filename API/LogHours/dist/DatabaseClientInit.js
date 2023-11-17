var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CosmosClient } from "@azure/cosmos";
const InitialiseDatabaseClient = () => __awaiter(void 0, void 0, void 0, function* () {
    const endpoint = "https://reddamdbacc.documents.azure.com:443/";
    const key = "r4D6DRNU0iAk3hrpHmEZjwz7txrRIGcfxzA53ce53sq5rEjJD7gody0TwYJsC1n5T99WqHlSn5rtACDbqeAfAQ==";
    const client = new CosmosClient({ endpoint, key });
    return yield client;
});
export default InitialiseDatabaseClient;
