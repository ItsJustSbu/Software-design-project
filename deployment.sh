# To build a container image and push it to Azure Container Registry, run the following command:
az acr build --registry reddamcontainer --image redammimage:v1 --file Dockerfile .

#AKV name is reddam-vault
$ACR_NAME = "reddam-vault"
#resource group is reddam-house-server
$RG = "reddam-house-server"
#ACR name is reddamcontainer
$ACR_NAME = "reddamcontainer"
#secret username is $ACR_NAME-pull-user
#secret password is $ACR_NAME-pull-pwd
#registry name is reddamcontainer.azurecr.io
# To deploy the container image to Azure Container Instances, run the following command:
az container create --resource-group Reddam-house-server \
 --name acr-tasks --image reddamcontainer.azurecr.io/redammimage:v1 \
 --registry-login-server reddamcontainer.azurecr.io \
 --registry-username $(az keyvault secret show --vault-name reddam-vault \
 --name $ACR_NAME-pull-user --query value -o tsv) --registry-password \
 $(az keyvault secret show --vault-name reddam-vault --name $ACR_NAME-pull-pwd --query value -o tsv) \
 --dns-name-label acr-tasks-reddamcontainer --query "{FQDN:ipAddress.fqdn}" --output table

 #to view the container instance
 az container attach --resource-group Reddam-house-server --name acr-tasks

 #if there are any changes to our container we will rebuild and push to ACR and update the container instance
 az container update --resource-group Reddam-house-server --name acr-tasks \
--image reddamcontainer.azurecr.io/redammimage:<replace with new tag of the image> \
--registry-login-server reddamcontainer.azurecr.io \
--registry-username $(az keyvault secret show --vault-name reddam-vault \
--name $ACR_NAME-pull-user --query value -o tsv) \
--registry-password $(az keyvault secret show --vault-name reddam-vault \
--name $ACR_NAME-pull-pwd --query value -o tsv)

