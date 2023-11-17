az acr build --image reddamimage:v5 --registry reddamregistry --file Dockerfile .

az acr repository list --name reddamregistry --output table