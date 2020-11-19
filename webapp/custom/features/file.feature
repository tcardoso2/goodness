
Feature: Add User
  In order to have users quickly
  As a developer
  I want to create users

  Scenario: Create User
    Given a sails site
    When I create a user with the name <user>
    Then the contents should equal "This is just a test content."

  Scenario Outline: More files
    Given a file in <path>
    When I read the file
    Then the contents should equal <content>

    Examples:
      | path                    | content                                             |
      | "./test/test_file1.txt" | "This is just a test content."                      |
      | "./test/test_file2.txt" | "This is the first line.\nThis is the second line." |

