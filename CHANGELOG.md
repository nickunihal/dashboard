# Frontend
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Issue #145] - 2018-08-22
### Added
- archDiagram.xml file for editing purpose

### Changed
- segment-editor view replaced with filter-view

## [Issue #144] - 2018-07-26
### Changed
- ui/ux login page 

## [Branch Staging-release-cohorts] - 2018-06-07
### Added
- saving cohorts feature
- Add userId filter
- AB split for cohort

## [Issue #143] - 2018-07-23
### Fixed
- In Side NavBar fixed the routing as it was confusing earlier, Churn report menu

## [Issue #138] - 2018-05-17
### Added
- Filter by userId
- Cohort analysis card

### Fixed
- Graph issue when pred is 100%
- Matrix card shows up only if the pred is expired for today

### Fixed
- Graph for integration card

## [Issue #116] - 2018-05-17
### Fixed
- Graph for integration card

## [Issue #124] -2018-04-17
### Fixed
- Bug relatated to environment file refaactor
- Docker compose compatibility

## [Issue #119] - 2018-04-18
### Fixed
- Component reload on NEW SEGMENT button click.


## [Issue #77] - 2018-04-17
### Changed
- 'Average revenue per user' to 'Average monthly Spend per user' in Take Action model.


## [Issue #76] - 2018-04-17
### Changed
- In this Vs All card , average Order value has been renamed as 'Average Monthly Spend'.


## [Issue #121] - 2018-04-16
### Changed
- Increased text limit of Segment Name from 10 to 20.

### Added
- Validators and error messages to the input fields.


## [Issue #112] - 2018-04-06
### Changed
- Change Churn Filter does not update the Histogram of the Filter


## [Issue #112] - 2018-04-06
### Fixed
- Check campaign modal logic
- Check campaign modal not closing on execution
- Integration card delete bug for MSG91 card

### Changed
- Campaign view to use campaign microservice instead of scheduler
- campaign card logic for delete

### Added
- Demo mode for campaign cards to show static data based on env files


## [Issue #69] - 2018-04-06
### Removed
- Arrow button from integration cards in the integration view


## [Issue #92] - 2018-04-05
### Added
- httpService to all the components and views

### Changed
- Environment files

### Removed
- Http headers from all the components and views


## [Issue #105] - 2018-03-27
### Added
- Msg91 Integration cards

### Changed
- Take action modal and forms
- New segment modal
- Environment file structure to accomadate firebase and msg91 


## [Issue #91] - 2018-03-26
### Changed
- Tooltip style and layout in the RoI card


## [Issue #70] - 2018-03-23
### Fixed
- Segment name in the segment-editor changes once a segment is saved


## [Issue #95] - 2018-03-22
### Added
- New Service 'HttpService' for global Http calls


## [Issue #72] - 2018-03-22
### Fixed
- Close dialog box once take-action flow is complete


## [Issue #107] - 2018-03-21
### Removed
- Removed icon from the title toolbar in campaigns view


## [Issue #104] - 2018-03-20
### Changed
- Spacing between View top bar title 16 px
- Filter title layout

### Fixed
- Center alignment of the loader in segment-editor
- Segment-editor scroll 

### Removed
- Dailyninja logo from take action flow


## [Issue #102] - 2018-03-20
### Added
- New component campaign performance in views
- New Component multi line graph
- New component funnel Graph
- dummy data for demo in campaign performance view
- Routing to campaign performance view from campaign cards
- added demo mode on environment cycle to use dummy data instead of Api for campaign performance view

### Fixed
- Fix Alignment on campaign performance view to match new menu design
- Font family to Roboto on campaigns view

### Changed
- Campaign-card to show graph and arrow to route to campaign performance 


## [Issue #99] - 2018-03-19
### Added
- Component check-campaign-modal with a modal popup with ok/cancel buttons in take-action flow

### Changed
- Take-action flow. On start campaign now a modal popup appears 


## [Issue #81] - 2018-03-13
### Added
- New collapsible sidenav
- Version number in the menu

### Removed
- Navbar
- Hamburger icon to toggle menu


## [Issue #83] - 2018-03-12
### Fixed 
- Card alignment in all the views


## [Issue #79] - 2018-03-12
### Fixed 
- Mat-card titles due to update in library


## [Issue #71] - 2018-03-12
### Added
- Back button to all deep nested views


## [1.0.5] - 2018-01-19
### Fixed
- calculation of total predictions count in predictions card  @julu
- Active days count in predictions card to 30 by @julu

### Changed
- Typos and phrasing in Impact and detection performance card by @julu


## [1.0.4] - 2018-01-18
### Changed
- CRC value from rupees to dollars by @julu
- Tooltips to include $ representations by @julu


## [1.0.3] - 2018-01-18
### Fixed
- Comment edit/delete bug by @prateek

### Changed
- authentication.service.ts file on setting maraxUser and token value on successful login by @prateek


## [1.0.2] - 2018-01-18
### Added
- Flagged numbers and revenue saved calculation by @prateek

### Fixed
- Typo in content by @prateek


## [1.0.1] - 2018-01-18
### Added
- Initialized the feed card with avatar by @prateek


## [1.0.0] - 2018-01-18
### Added
- Prediction performance card to show the performance of predictions made by Marax in terms of __accuracy__, __hit rate__ and __false alarm rate__ by @mariam
- RoI (Impact) card to compare LTV Retained and Retention costs with the current system and the Marax engine. Also, the comparisons between LTV and Retention Costs with Marax and the current system. 
The card also calculates the return on marketing spent and the reduction in churn rate. by @julu 
- Potential Savings card to show the number of users detected by the Marax engine who are at high risk. The predicted monthly revenue is also shown which could have been lost after the churn. by @mariam
- Added total number of predictions in the Predictions card. by @julu
- [CHANGELOG.md][CHANGELOG.md]: Updated the version details by @mariam
- [CONTRIBUTING.md][CONTRIBUTING.md] by @mariam

### Changed
- Number of __unique tenants__ to __unique users__ in the Predictions card by @julu
- Size and color of the graph in Detection Performance card by @mariam
- [README.md][README.md]: folder structure and views (their components and relationships) by @mariam

### Removed
The following cards have been from the dashboard: 
- Historic Value of Users 
- Lifetime Distribution of Users
- Transactions
- This Segment vs All Users
- New Segment 
by @mariam


[CHANGELOG.md]: CHANGELOG.md
[CONTRIBUTING.md]: CONTRIBUTING.md  
[README.md]: README.md

