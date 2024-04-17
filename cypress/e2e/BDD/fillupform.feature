Feature: End to End fill up the page

    @Regression
    Scenario: Form fill up page validations
    Given i navigate to home page
    When Fill the <username> field
    Then Fill the new <email> field
    And Fill the password <password> field
    Then Fill the gender <gender> field
  Examples:
      | username  | email         | password    | gender   |
      |  "sm"     | "sm@abc.com" | "12345678"   | "Female" |
      |  "sm1"    | "sm1@abc.com" | "12345678" | "Female" |