import { TranslationWidth } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';

interface frameScoreData {
	first: number;
	second?: number;
	third?: number;
}

export interface FrameObj {
  frames: Array<any>;
}

@Component({
  selector: 'app-bowling-score-calculator-component',
  templateUrl: './bowling-score-calculator-component.component.html',
  styleUrls: ['./bowling-score-calculator-component.component.scss']
})

export class BowlingScoreCalculatorComponentComponent implements OnInit {
  public formData: frameScoreData;
  public score: number = 0;
  public rollsArr: Array<number> = [];
  public frameNumber: number = 1;

  constructor() { 
    this.formData = {
			first: 0,
			second: 0,
			third: 0
		};
  }
  
  
  ngOnInit(): void { }

  public submitScore() : number {
      if(this.frameNumber < 10){ // For frame number 1 to 9
        if(this.formData.first === 10){ // Is Strike
          this.rollsArr.push(this.formData.first);
        }else{
          this.rollsArr.push(this.formData.first,this.formData.second ? this.formData.second : 0);
        }
      }
      else if(this.frameNumber === 10){ // For frame number 10
        this.rollsArr.push(this.formData.first,this.formData.second ? this.formData.second : 0,this.formData.third ? this.formData.third : 0);
      }
      
      this.score = this.scoreCalculator(); // Calculate Score
      this.formData = {first: 0,second: 0,third: 0}; // Reset form
      this.frameNumber = this.frameNumber + 1; // Increase frame number
      return this.score;
  }

  public scoreCalculator(){
    let score = 0;
    let rollIndex = 0;
    for(let frameIndex=0;frameIndex<this.frameNumber;frameIndex++){
        if(this.isStrike(rollIndex)){
            score += this.getStrikeBonus(rollIndex);
            rollIndex++;
            continue;
        }
        let frameScore = this.frameScore(rollIndex);
        if(this.isSpare(frameScore)){
            score += this.getSpareBonus(rollIndex)
        }else{
            score += frameScore;
        }
        
        rollIndex+=2
    }
    return score;
  }

  frameScore(rollIndex:number){
      return (this.rollsArr[rollIndex] ? this.rollsArr[rollIndex] : 0) + (this.rollsArr[rollIndex+1] ? this.rollsArr[rollIndex+1] : 0);
  }

  getSpareBonus(rollIndex:number){
      return 10 + (this.rollsArr[rollIndex+2] ? this.rollsArr[rollIndex+2] : 0);
  }
  getStrikeBonus(rollIndex:number){
      return 10 + (this.rollsArr[rollIndex+1] ? this.rollsArr[rollIndex+1] : 0) + (this.rollsArr[rollIndex+2] ? this.rollsArr[rollIndex+2] : 0);
  }

  isSpare(frameScore:number){
      return frameScore===10;
  }

  isStrike(rollIndex:number){
      return this.rollsArr[rollIndex]===10;
  }

}
