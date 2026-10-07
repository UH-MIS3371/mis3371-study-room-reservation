# Week 6 JavaScript Checkpoint

## Implemented Behavior

The reservation page now evaluates the number of attendees against a study room capacity of six. The behavior uses an external `app.js` file loaded with `defer`, selects the attendee input and visible message element with `document.querySelector`, converts the input with `Number(...)`, and updates the page with `textContent` during the `input` event.

## Project Specific Rule

`fitsRoomCapacity(partySize)` returns `true` when the requested group size is six or fewer and `false` when the group size is greater than six. The rule supports the existing capacity-limit requirement in the project documentation.

## Test Results

| Attendees | Expected visible result | Result |
| ---: | --- | --- |
| Blank | No message | Pass |
| 1 | This group fits the selected study room. | Pass |
| 5 | This group fits the selected study room. | Pass |
| 6 | This group fits the selected study room. | Pass - boundary |
| 7 | This group exceeds the study room capacity of 6. | Pass |

The JavaScript passed syntax and behavior checks with no errors.
