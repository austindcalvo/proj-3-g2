# Election Dashboard
The Election Dashboard can be found at: https://austindcalvo.github.io/proj-3-g2/

## Project Introduction 
The purpose of this project is to review voting trends in the United States Presidential Elections in 2016 and 2020. We will explore the relationships between different demographic and geographic variables and the method of voting to determine correlations between these factors and voting for one of two major parties.

## Group Members
• Matthew Belcher • Waynette Burke • Austin Calvo • Gino Hernandez • Jasmine Leal

## Technologies/Languages Used
* Python/Pandas 
* HTML
* JSON/ GeoJSON
* SQL
* Leaflet
* Javascript

## Questions we'll ask of the data:
1. Which states voted for one party in 2016 and another in 2020?
2. How did the demographic makeup of these voter bases change between 2016 and 2020?
3. How did campaign contributions change in each state between 2016 and 2020?

## Data Sources:
* MIT Election Data and Science Lab dataverse.harvard.edu. (2022, March 18) County Presidential Election Returns 2000-2020. Retrieved October 5, 2022, from https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/VOQCHQ This data was collected via CSV file. The dataset source is compiled by Alexander Agadjanian, John Curiel and Samuel Baltz from federal elections data provided by The Federal Elections Commission. The dataset includes statewide election returns by state for years 2000-2020. It was chosen due to having higher level data that was already compiled and cleaned, making it relatively easily accessible compared to other larger datasets chosen. The data was extracted from the website via CSV file.

* MIT Election Data and Science Lab dataverse.harvard.edu. (2022, January 26) U.S. President Precinct-Level Returns 2016. Retrieved October 5, 2022, from https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/LYWX3D This data was collected via CSV file. The dataset source is compiled by Alexander Agadjanian, John Curiel and James Dunham from federal elections data provided by The Federal Elections Commission. The dataset includes state and county election returns by state for the year 2016. It was chosen for its wide array of fields and detailed data. The data was extracted from the website via CSV file.

* MIT Election Data and Science Lab dataverse.harvard.edu. (2022, March 17) U.S. President Precinct-Level Returns 2016. Retrieved October 5, 2022, from https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/OKL2K1 This data was collected via CSV file. The dataset source is compiled by Samuel Baltz from federal elections data provided by The Federal Elections Commission. The dataset includes state and county election returns by state for the year 2020. It was chosen for its wide array of fields and detailed data. The data was extracted from the website via CSV file.

* FEC API Data FEC.gov (undated). Retrieved October 5, 2022, from api.open.fec.gov/developers This data was collected via API. The dataset source is compiled by the The Federal Elections Commission. The dataset includes campaign funding data by state. It was chosen in order to illustrate party differences in funding. The data was extracted from the website via API.

* USA 2016 Presidential Election Voting Polls kaggle.com (undated) Retrieved October 5, 2022, from https://www.kaggle.com/datasets/bobnis/us-stats-voting?resource=download This dataset includes demographic data for the 2016 presidential election. It was chosen for it's ability to show demographic voting patterns vs 2020 demographic data. The data was extracted via CSV file.

* County FIPS Codes ncos.usda.gov (undated) Retrieved October 13th, 2022, from https://www.nrcs.usda.gov/wps/portal/nrcs/detail/national/home/?cid=nrcs143_013697 This dataset includes FIPS location codes for each county and state in the United States. It was chosen in order to aid in geolocation of election results. This data was extracted via Web Scrape.

* US counties with fips code, name, and lat lng gist.github.com (undated) Retrieved October 13th, 2022 from https://gist.github.com/russellsamora/12be4f9f574e92413ea3f92ce1bc58e6 This dataset contains the geocodes for each FIPS code in the United States. It was chosen because it allows us to use leaflet to map election results by state. This data was extracted via CSV.

## Type of final production Database: 
Relational Database. Our final data was stored in a SQL database using PGAdmin. Our election results datasets were joined using a concatenation of state and county FIPS codes, we then used this to join with geocoding data at which point we transformed the data to best fit our visualizations. We utilized Pandas, Leaflet, Javascript, Flask and JSON in order to create interactive visualizations of our data.