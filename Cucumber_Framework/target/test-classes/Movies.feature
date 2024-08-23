
Feature: Create new account in facebook

Scenario: Create new account
Given Launch the facebook application "https://www.facebook.com/"
Then Validate the launched facebook application "https://www.facebook.com/"
Given User click on create new account
And User send the Firstname one dim list
|feliciya|joseph|godwin|fewin|fewina|
And User send the Surname one dim map
|name|felixiya|
|sname|mala|
|last|mathu|

Scenario Outline: Create new account
Given Launch the facebook application "https://www.facebook.com/"
Then Validate the launched facebook application "https://www.facebook.com/"
Given User click on create new account
And User send the Firstname one dim list
|feliciya|joseph|godwin|fewin|fewina|
And User send the Surname one dim map
|name|felixiya|
|sname|mala|
|last|mathu|
And User send the Mobilenumber or email address "<email>"
And User send new password "<password>"
And User Select the Date of birth "<day>" "<month>" "<year>"
And User Select the Gender
And User click onSing Up button

 Examples:
 |email     		    |password|day|month|year|       
 |feli@gmail		    |ammu@87 |10 |Aug  |2000|
 |ragu@gmail        |mathu@34|23 |Feb  |1996|
 |felixiyaguna@gmail|mala@13 |2  |Apr  |1998|





































#Feature: Book a Movie under Movies
#
#Background: User launch applicationand clicks on movies
#Given Launch the book My Show application
#Then Vali
#date the launched application
#Given User enters city and choose the city
#And User clicks on Movies
#
#Scenario: Book a Tamil Movie
#And User Select the Tamil language
#And User click on Genres
#And User Selects the Drama Genres
#And User click on Format
#And User Select the 2D Format
#And User Browse by Cinemas
#Then User Validate the Displayed
#
#Scenario: Book a English Movie
#And User Select the English language
#And User click on Genres
#And User Selects the Drama Genres
#And User click on Format
#And User Select the 2D Format
#And User Browse by Cinemas
#Then User Validate the Displayed
#
#Scenario: Book a Malayalam Movie
#And User Select the Malayalam language
#And User click on Genres
#And User Selects the Drama Genres
#And User click on Format
#And User Select the 2D Format
#And User Browse by Cinemas
#Then User Validate the Displayed
#
#Scenario: Book a Telugu Movie
#And User Select the Telugu language
#And User click on Genres
#And User Selects the Drama Genres
#And User click on Format
#And User Select the 2D Format
#And User Browse by Cinemas
#Then User Validate the Displayed
#
#Scenario: Book a Hindi Movie
#And User Select the Hindi language
#And User click on Genres
#And User Selects the Drama Genres
#And User click on Format
#And User Select the 2D Format
#And User Browse by Cinemas
#Then User Validate the Displayed