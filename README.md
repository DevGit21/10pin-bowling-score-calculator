
# 10 Pin Bowling Score Calculator

This is a 10 Pin Bowling Score Calculator SPA build with Angular(14.2.5) and typescript(4.7.4). It was created by Bhagyashri Mande. This solution is created for one frontend coding assignment. The solution is developed with TDD approch using Jasmin for unit testing.

## About

This solution can be used to score 10 pin bowling game. Below are the rules for Score calculation.
1. A game consists of ten frames. Frame 1-9 are composed of two rolls. Frame 10 can be composed of up to three rolls depending on if the first rolls in the frame is a strike or a spare.
2. Each frame can have one of three marks:
    - Strike: all 10 pins where knocked down with the first roll.
    - Spare: all 10 pins where knocked down using two rolls.
    - Open: some pins where left standing after the frame was completed.
3. When calculating the total score, the sum of the score for each frame is used.
    - For an open frame the score is the total number of pins knocked down.
    - For a strike, the score is 10 + the sum of the two rolls in the following frame.
    - For a spare, the score is 10 + the number of pins knocked down in the first roll of the following frame.
4. The tenth frame may be composed of up to three rolls: the bonus roll(s) following a strike or spare in the tenth (sometimes referred to as the eleventh and twelfth frames) are fill ball(s) used only to calculate the score of the mark rolled in the tenth.


## How to run
Applicaion can be accessed on http://localhost:4200/. for this run command `ng serve` \
For unit testing use command `ng test` \
For code coverage details use command `ng test --code-coverage` 


