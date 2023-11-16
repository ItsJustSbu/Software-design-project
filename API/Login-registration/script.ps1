az acr build --image reddamimage:v3 --registry reddamregistry --file Dockerfile .

az acr repository list --name reddamregistry --output table