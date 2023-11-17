az acr build --image reddamimage:notification --registry reddamregistry --file Dockerfile .

az acr repository list --name reddamregistry --output table