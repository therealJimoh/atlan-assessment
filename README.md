# Atlan Frontend Engineer Assessment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The frontend development of a data analyst web app:

1. Two predefined set of query to load daa.
2. You can also type queries in a text area to generate data.
3. Search and Filter input to filter through fetched data by first name.
4. Pagination to paginate a set of data per page.


# Performance Optimization and Profered Solution
In a bid to increase the performance of the web application, I refrained from installing npm packages - dependencies to carry out some tasks and add features: features like writing custom pagination to have the data analyst paginate through data per page after they have been fetched. The data analyst can also limit their search by filtering through data using the filter input. 

## Page load time
Two tools was used to calculate the page load time and performance:
1. The google chrome lighthouse
2. Page Speed Insights.

## Google chrome lighthouse without optimization
![Google Lighthoue](./public/ligthhouse_check.png)

## Google Performance check
![Google Performance check](./public/chrome_performance.png)

## Page Speed Insight performance without optimization
![Page speeed insght1](./public/performance.png)

## Page Speed Insight Metrics without optimization
![page speed metrics](./public/metrics.png)





## Project Setup

In the project directory, you can run:

``` sh
npm install
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser with

``` sh
npm start
```