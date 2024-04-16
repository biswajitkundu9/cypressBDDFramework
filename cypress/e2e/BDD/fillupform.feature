Feature: End to End fill up the page

    @Hello
    Scenario: Form fill up page validations
    Given i navigate to home page
    When Fill the <username> field
    Then Fill the <email> field
    And Fill the <password> field
    Then Select the gender
  Examples:
      | username | email         | password   |
      |  "bk"    | "abc@abc.com" | "12345678" |