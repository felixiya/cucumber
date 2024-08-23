$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Facebook.feature");
formatter.feature({
  "name": "Create new account in facebook",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create new account",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Launch the facebook application \"https://www.facebook.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bookMyShow.facebook.launch_the_facebook_application(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the launched facebook application \"https://www.facebook.com/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bookMyShow.facebook.validate_the_launched_facebook_application(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on create new account",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bookMyShow.facebook.user_click_on_create_new_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User send the Firstname one dim list",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.bookMyShow.facebook.user_send_the_firstname_one_din_list(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User send the Surname one dim map",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.bookMyShow.facebook.user_send_the_surname_one_dim_map(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Movies.feature");
formatter.feature({
  "name": "Book a Movie under Movies",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "User launch applicationand clicks on movies",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Launch the book My Show application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bookMyShow.Movies.launch_the_book_my_show_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the launched application",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bookMyShow.Movies.validate_the_launched_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters city and choose the city",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bookMyShow.Movies.user_enters_city_and_choose_the_city()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Movies",
  "keyword": "And "
});
formatter.match({
  "location": "com.bookMyShow.Movies.user_clicks_on_movies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Book a Tamil Movie",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User Select the Tamil language",
  "keyword": "And "
});
formatter.match({
  "location": "com.bookMyShow.Movies.user_select_the_tamil_language()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Genresss",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});