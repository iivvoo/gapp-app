# Gap-app

Gap helps you focus on things you need to work on today and/or to limit your
focus to specific Goals.

This project started out as a toy project to learn more about EmberJS. Currently
it's useful enough for me to use for storing tasks and resources. I hope it will
be useful as example for otheres.

If you plan to actually use the application for storing data, *MAKE SURE YOU
SYNC TO AND BACKUP YOUR COUCHDB REGULARLY!*

## Goal

A goal can be a lot. It can be a project that needs completion. It can be a
personal project. It can be something you want to achieve (e.g. lose weight,
exercise more or something that you're planning such as a vacation.

Goals consist of sub goals, tasks and resources.

## Task

A task is something that needs to be done eventually. It can have a deadline
and a priority.

A task can expire which means it no longer has to be done. E.g. no need to
shop for christmas gifts anymore in january.

A task can also repeat itself. This can be very strict, for example you need
to file your taxes each year. It can also be more flexibel, for example 6 months after the previous iteration was completed. If you're 4 months late for your
periodical 6-month coffee machine cleaning, there's no need to do it again
in two months.

## Resource

Gap helps you organize and collect things related to your goals. This can be
notes, secrets, links (to webpages, video's, etc). Resources usually do not
expire.

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

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
