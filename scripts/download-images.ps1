# Create directories if they don't exist
$directories = @(
    "public/images/hero",
    "public/images/showcase"
)

foreach ($dir in $directories) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
}

# Download hero image
$heroImageUrl = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
$heroImagePath = "public/images/hero/hero-bg.jpg"
Invoke-WebRequest -Uri $heroImageUrl -OutFile $heroImagePath

# Download showcase images
$showcaseImages = @(
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
)

for ($i = 0; $i -lt $showcaseImages.Count; $i++) {
    $imageUrl = $showcaseImages[$i]
    $imagePath = "public/images/showcase/showcase-$($i + 1).jpg"
    Invoke-WebRequest -Uri $imageUrl -OutFile $imagePath
    Write-Host "Downloaded: $imagePath"
}

Write-Host "\nAll images have been downloaded successfully!" -ForegroundColor Green
