az acr build --image reddamimage:notice --registry reddamregistry --file Dockerfile .

az acr repository list --name reddamregistry --output table