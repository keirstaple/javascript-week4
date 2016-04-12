# JS-Week4

This Ember application lets users add restaurants and and add reviews to each reastaurant. They can then up-vote and down-vote reviews based on their helpfulness, as well as add restaurants to their favorites.

Code Objectives: 
* The project contains at least one functioning computed property.
* A service has been implemented successfully.
* At least one custom helper is being used to format data.
* Previous Epicodus standards have been met.
* The application works as expected.
* Able to discuss the flow of the code and the concepts behind it with an instructor using correct terminology.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

###Known Bugs
When the user up-votes a review and the review reaches more than 10 votes (the number required to display the green 'Helpful' text signifying that the review is useful to others), the user must first revert to the homepage and then click the restaurant again before the Helpful text shows.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

