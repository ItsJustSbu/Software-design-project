az acr build --image reddamimage:dispatch --registry reddamregistry --file Dockerfile .

az acr repository list --name reddamregistry --output table