# PowerShell
$apiDir = "."

# Get all directories in the API directory
$directories = Get-ChildItem -Path $apiDir -Directory

# Loop through each directory
foreach ($dir in $directories) {
    # Change to the directory
    Set-Location -Path $dir.FullName

    # Run npm init with -y flag to automatically say yes to all prompts
    npm init -y

    # Install TypeScript
    npm install typescript --save-dev

    # Change back to the original directory
    Set-Location -Path $apiDir
}