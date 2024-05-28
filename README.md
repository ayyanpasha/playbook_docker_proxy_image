# Proxy Server

This is made to support the playground communication with:
FrontEnd: https://github.com/ayyanpasha/codedamn-frontend.git
Express API: https://github.com/ayyanpasha/playbook_express_api.git

This repository contains two proxy servers: a WebSocket proxy server and an HTTP proxy server. The WebSocket proxy server forwards WebSocket connections to target WebSocket servers, while the HTTP proxy server routes HTTP requests to target servers based on query parameters.

## Table of Contents

- [Getting Started](#getting-started)
- [Running the Proxy Server](#running-the-proxy-server)
- [Docker](#docker)
- [Endpoints](#endpoints)
- [License](#license)

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>=14.x.x)
- npm (>=6.x.x) or yarn (>=1.x.x)
- Docker (for running Ubuntu containers)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ayyanpasha/playbook_docker_proxy_image.git
   cd playbook_docker_proxy_image

2. **Install dependencies:**
   ```bash
   npm install

3. **Convert TS to JS:**
    ```bash
    tsc

4. **Create Docker Image:**
    ```bash
    docker build -t proxy-server .

6. **Create Docker Network:**
    ```bash
    docker network create codedamn

7. **Run Docker Image:**
    ```bash
    docker run --network codedamn -p 80:80 -p 3001:3001 -d proxy-server

## Built With

- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.