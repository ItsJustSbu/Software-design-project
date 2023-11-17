az acr build --image reddamimage:loghours --registry reddamregistry --file Dockerfile .

az acr repository list --name reddamregistry --output table