# Install Dependencies for All Sites

Write-Host "Installing dependencies for all 6 portfolio sites..." -ForegroundColor Green

$sites = @(
    "site-1-minimalist-bold",
    "site-2-gradient-modern",
    "site-3-professional-dark",
    "site-4-glassmorphism-light",
    "site-5-modern-tech",
    "site-6-brutalist-bold"
)

foreach ($site in $sites) {
    Write-Host "`nInstalling dependencies for $site..." -ForegroundColor Cyan
    Set-Location $site
    npm install framer-motion
    Set-Location ..
    Write-Host "✓ Completed $site" -ForegroundColor Green
}

Write-Host "`n✓ All dependencies installed successfully!" -ForegroundColor Green
Write-Host "`nYou can now run any site with:" -ForegroundColor Yellow
Write-Host "  cd site-X-name" -ForegroundColor White
Write-Host "  npm run dev" -ForegroundColor White
