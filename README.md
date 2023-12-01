# News API Project

## Objective

Build a RESTful API that enables users to fetch news articles from multiple sources based on their preferences.

## Project Description

In this project, we will develop a RESTful API utilizing Node.js, Express.js, and NPM packages. The API will offer functionalities for user registration, login, and news preference customization. Additionally, it will fetch news articles from various sources using external news APIs, such as NewsAPI. The fetched articles will be processed and filtered asynchronously based on individual user preferences.

## Table of Contents

- [News API Project](#news-api-project)
  - [Objective](#objective)
  - [Project Description](#project-description)
  - [Table of Contents](#table-of-contents)
  - [Submission Guidelines](#submission-guidelines)
    - [Requirements](#requirements)
  - [Getting Started](#getting-started)
  - [API Documentation](#api-documentation)
    - [1. User Registration](#1-user-registration)
    - [2. User Login](#2-user-login)
    - [3. Get User Preferences](#3-get-user-preferences)
    - [4. Update User Preferences](#4-update-user-preferences)
    - [5. Fetch News Articles](#5-fetch-news-articles)
  - [Contributors](#contributors)
  - [License](#license)

## Submission Guidelines

### Requirements

1. **Node.js Project Setup:**
   - Set up a basic Node.js project with Express.js and other necessary NPM packages.

2. **User Authentication:**
   - To Be Updated

3. **Data Storage:**
   - Usign MongoDB cloud to store the data.

4. **RESTful API Endpoints:**
   - Implement the following RESTful API endpoints:
     - `POST /news-aggregator/v1/register`: Register a new user.
     - `POST /news-aggregator/v1/login`: Log in a user.
     - `GET /news-aggregator/v1/preferences`: Retrieve the news preferences for the logged-in user.
     - `PUT /news-aggregator/v1/preferences`: Update the news preferences for the logged-in user.
     - `GET /news-aggregator/v1/news`: Fetch news articles based on the logged-in user's preferences.

5. **External News API Integration:**
   - Used newsapi.org to fetch news articles

6. **Error Handling:**
   - To be Updated.

7. **Input Validation:**
   - To be Updated.

8. **Testing:**
   - To be Updated.

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/abhinavksharma/news-aggregator.git
