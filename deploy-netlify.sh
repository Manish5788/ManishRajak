#!/bin/bash

# Netlify Deployment Script for Manish Kumar Rajak Portfolio
# This script prepares and deploys the portfolio to Netlify

echo "🚀 Starting Netlify deployment preparation..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Check if we're in the right directory
if [ ! -f "package.json" ] && [ ! -d "frontend" ]; then
    print_error "Please run this script from the project root directory"
    exit 1
fi

# Navigate to frontend directory
cd frontend

print_info "Current directory: $(pwd)"

# Check if package.json exists
if [ ! -f "package.json" ]; then
    print_error "package.json not found in frontend directory"
    exit 1
fi

# Install dependencies
print_info "Installing dependencies..."
if command -v yarn &> /dev/null; then
    yarn install
    if [ $? -eq 0 ]; then
        print_status "Dependencies installed successfully with Yarn"
    else
        print_error "Failed to install dependencies with Yarn"
        exit 1
    fi
else
    npm install
    if [ $? -eq 0 ]; then
        print_status "Dependencies installed successfully with npm"
    else
        print_error "Failed to install dependencies with npm"
        exit 1
    fi
fi

# Build the project
print_info "Building project for production..."
if command -v yarn &> /dev/null; then
    yarn build
else
    npm run build
fi

if [ $? -eq 0 ]; then
    print_status "Build completed successfully"
else
    print_error "Build failed"
    exit 1
fi

# Check if build directory exists
if [ ! -d "build" ]; then
    print_error "Build directory not found"
    exit 1
fi

print_status "Build directory created with $(ls -la build | wc -l) files"

# Display build information
print_info "Build size information:"
du -sh build/
echo

# Netlify deployment instructions
echo -e "${BLUE}📋 NETLIFY DEPLOYMENT INSTRUCTIONS:${NC}"
echo
echo "1. Go to https://app.netlify.com/"
echo "2. Click 'Add new site' > 'Deploy with Git'"
echo "3. Choose your GitHub repository: https://github.com/Manish5788/ManishRajak.git"
echo "4. Configure build settings:"
echo "   - Build command: yarn build"
echo "   - Publish directory: frontend/build"
echo "   - Base directory: frontend"
echo
echo "5. Set environment variables in Netlify dashboard:"
echo "   - REACT_APP_BACKEND_URL: https://your-backend-url.herokuapp.com"
echo "   - NODE_VERSION: 18"
echo
echo "6. Deploy!"
echo

print_status "Deployment preparation completed!"
print_info "Your portfolio is ready for Netlify deployment"

# Go back to root directory
cd ..

echo -e "${GREEN}🎉 Ready for deployment! Your build is optimized and ready.${NC}"