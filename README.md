# S8A4

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4.

Note: All output related files are under "src/app" folder.

## Problem Statement
1. Create a service with two functions. First function will have array of object which it
will return (GET). Second function will have add the values in the array by using
unshift() method. Create another service from which we will get only array of objects
for dropdown List of Mr and Mrs.
2. The 1st service will be called in Component and 2 nd service will be called in
@NgModule
3. Create a logging service with the method like log, info, warn, clear and whenever
adding the data it should log a message to the console “Adding data” and while
retrieving it should display message info “Retrieving data.” from the Service where it
is retrieving from.
4. Create text box to add the values in the array with the help of service and a table
to loop over the array values which we have added. Create a drop-down list and
access values from service. Use ngIf to hide the table unless you add the values in the
array. Show only if the length of an array is > 0

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
